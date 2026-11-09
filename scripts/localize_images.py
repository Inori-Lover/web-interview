#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = ["httpx[http2]==0.28.1"]
# ///
"""Save documentation images locally; use --apply to update downloaded references.

Run with: uv run scripts/localize_images.py --apply
Code samples and HTML comments are deliberately excluded. The JSON manifest
records the original URL, recovery source, checksum, and any unresolved images.
"""

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import hashlib
import html
import json
import os
from pathlib import Path
import re
import tempfile
import time
from urllib.parse import unquote, urlencode, urlsplit

import httpx


ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
ASSETS = DOCS / "assets" / "images"
MANIFEST = ROOT / "scripts" / "image-migration.json"
URL = re.compile(r'https?://[^\s<>"\x27)]+')
IMAGE_EXT = re.compile(r"\.(?:png|jpe?g|gif|webp|svg|avif)$", re.I)
FENCE = re.compile(r"^\s*(`{3,}|~{3,})")
SOURCE_EXT = {".md", ".vue", ".js", ".html", ".css", ".styl"}
CLIENT = httpx.Client(
    http2=True, follow_redirects=True, timeout=httpx.Timeout(30, connect=10),
    limits=httpx.Limits(max_connections=6, max_keepalive_connections=6),
)


def visible_source(text, markdown):
    """Mask examples without changing offsets used when editing the source."""
    def blank(value):
        return re.sub(r"[^\n]", " ", value)

    masked = re.sub(r"<!--[\s\S]*?-->", lambda m: blank(m[0]), text)
    if not markdown:
        return masked
    lines = []
    fence = None
    for line in masked.splitlines(keepends=True):
        marker = FENCE.match(line)
        if marker:
            run = marker[1]
            if fence is None:
                fence = run
            elif run[0] == fence[0] and len(run) >= len(fence):
                fence = None
            lines.append(blank(line))
        elif fence:
            lines.append(blank(line))
        else:
            lines.append(line)
    # CommonMark code spans may contain line breaks, but not paragraph breaks.
    inline_code = r"(?<![\\`])(`+)(?!`)(?:(?!\n[ \t]*\n)[\s\S])*?(?<!`)\1(?!`)"
    return re.sub(inline_code, lambda m: blank(m[0]), "".join(lines))


def inventory():
    references = {}
    for path in sorted(DOCS.rglob("*")):
        if not path.is_file() or path.suffix not in SOURCE_EXT:
            continue
        if any(part in {"assets", "dist", "node_modules"} for part in path.parts):
            continue
        source = visible_source(path.read_text(), path.suffix == ".md")
        for match in URL.finditer(source):
            url = html.unescape(match[0])
            prefix = source[:match.start()]
            markdown_image = re.search(r"!\[(?:[^\[\]\n]|\[[^\]\n]*\])*\]\(\s*<?$", prefix)
            html_image = re.search(r"<img\b[^>]*\bsrc\s*=\s*['\"]$", prefix, re.I)
            if not IMAGE_EXT.search(urlsplit(url).path) and not markdown_image and not html_image:
                continue
            references.setdefault(url, set()).add(path.relative_to(ROOT).as_posix())
    return references


def asset_path(url):
    parsed = urlsplit(url)
    filename = re.sub(r"[^a-zA-Z0-9._-]", "-", unquote(Path(parsed.path).name))
    if parsed.query:
        stem, extension = os.path.splitext(filename)
        filename = f"{stem}-{hashlib.sha256(url.encode()).hexdigest()[:10]}{extension}"
    if len(filename) > 180:
        filename = filename[:160] + "-" + hashlib.sha256(url.encode()).hexdigest()[:16]
    return ASSETS / parsed.hostname / filename


def image_extension(data):
    if data.startswith(b"\x89PNG\r\n\x1a\n"):
        return ".png"
    if data.startswith(b"\xff\xd8\xff"):
        return ".jpg"
    if data.startswith((b"GIF87a", b"GIF89a")):
        return ".gif"
    if data.startswith(b"RIFF") and data[8:12] == b"WEBP":
        return ".webp"
    if re.search(br"<svg[\s>]", data[:2048]):
        return ".svg"
    if data[4:8] == b"ftyp" and b"avif" in data[8:32]:
        return ".avif"
    return None


def is_image(data):
    return image_extension(data) is not None


def fetch(url, target):
    headers = {"User-Agent": "Mozilla/5.0 (compatible; web-interview-image-migration/1.0)"}
    hostname = urlsplit(url).hostname
    if hostname.endswith(("zhimg.com", "zhihu.com")):
        headers["Referer"] = "https://www.zhihu.com/"
    elif hostname.endswith("byteimg.com"):
        headers["Referer"] = "https://juejin.cn/"
    elif hostname.endswith("jianshu.io"):
        headers["Referer"] = "https://www.jianshu.com/"
    elif hostname.endswith("csdnimg.cn"):
        headers["Referer"] = "https://blog.csdn.net/"
    for attempt in range(3):
        try:
            response = CLIENT.get(url, headers=headers)
            response.raise_for_status()
            target.write_bytes(response.content)
            return str(response.url)
        except httpx.HTTPError as error:
            if isinstance(error, httpx.HTTPStatusError) and error.response.status_code < 500 and error.response.status_code != 429:
                raise RuntimeError(str(error)) from error
            if "CERTIFICATE_VERIFY_FAILED" in str(error):
                raise RuntimeError(str(error)) from error
            if attempt == 2:
                raise RuntimeError(str(error) or type(error).__name__) from error
            time.sleep(2 ** attempt)


def archive_url(url, index):
    parsed = urlsplit(url)
    row = index.get((parsed.hostname, parsed.path))
    return f"https://web.archive.org/web/{row[1]}id_/{row[0]}" if row else None


def recover(url, files, index, previous):
    target = ROOT / previous["path"] if previous.get("path") else asset_path(url)
    record = {"url": url, "path": target.relative_to(ROOT).as_posix(), "references": sorted(files)}
    if target.exists() and is_image(target.read_bytes()):
        data = target.read_bytes()
        return {
            **record, "status": "downloaded",
            "source": previous.get("source") or archive_url(url, index) or url,
            "bytes": len(data), "sha256": hashlib.sha256(data).hexdigest(),
        }
    source = archive_url(url, index)
    # The original Qiniu hostname no longer resolves. Avoid hundreds of retries.
    if urlsplit(url).hostname == "static.vue-js.com":
        candidates = [source] if source else []
    else:
        candidates = list(dict.fromkeys(candidate for candidate in (url, source) if candidate))
    if not candidates:
        return {**record, "status": "unresolved", "error": "No image in the archive index; original hostname does not resolve."}
    errors = []
    for candidate in candidates:
        descriptor, temporary = tempfile.mkstemp(prefix="web-interview-image-")
        os.close(descriptor)
        temporary = Path(temporary)
        try:
            effective_url = fetch(candidate, temporary)
            data = temporary.read_bytes()
            if not is_image(data):
                raise RuntimeError("Response is not a supported image (possibly an HTML error page).")
            if not IMAGE_EXT.search(target.suffix):
                target = target.with_suffix(image_extension(data))
                record["path"] = target.relative_to(ROOT).as_posix()
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(data)
            return {
                **record, "status": "downloaded", "source": effective_url,
                "bytes": len(data), "sha256": hashlib.sha256(data).hexdigest(),
            }
        except RuntimeError as error:
            errors.append(str(error))
        finally:
            temporary.unlink(missing_ok=True)
    return {**record, "status": "unresolved", "error": "; ".join(errors)}


def apply_references(records):
    replacements = {row["url"]: ROOT / row["path"] for row in records if row["status"] == "downloaded"}
    paths = sorted({filename for row in records for filename in row["references"]})
    changed = 0
    for filename in paths:
        path = ROOT / filename
        original = path.read_text()
        masked = visible_source(original, path.suffix == ".md")
        edits = []
        for match in URL.finditer(masked):
            url = html.unescape(match[0])
            if url not in replacements:
                continue
            relative = os.path.relpath(replacements[url], path.parent).replace(os.sep, "/")
            if not relative.startswith("."):
                relative = "./" + relative
            # Markdown image links are processed by webpack. Plain links to an
            # image need require() too, otherwise they point into source folders.
            prefix = original[:match.start()]
            link = re.search(r"(?<!!)\[([^\]\n]+)\]\($", prefix) if path.suffix == ".md" else None
            if link and original[match.end():].startswith(")"):
                label = html.escape(link[1])
                edits.append((link.start(), match.end() + 1, f'<a :href="require(\'{relative}\')">{label}</a>'))
            else:
                edits.append((match.start(), match.end(), relative))
        updated = original
        for start, end, replacement in reversed(edits):
            updated = updated[:start] + replacement + updated[end:]
        if updated != original:
            path.write_text(updated)
            changed += 1
    return changed


def write_manifest(records):
    records = sorted(records, key=lambda row: row["url"])
    summary = {
        "images": len(records),
        "downloaded": sum(row["status"] == "downloaded" for row in records),
        "unresolved": sum(row["status"] == "unresolved" for row in records),
    }
    temporary = MANIFEST.with_suffix(".tmp")
    temporary.write_text(json.dumps({"summary": summary, "images": records}, ensure_ascii=False, indent=2) + "\n")
    temporary.replace(MANIFEST)
    return summary


def check_manifest():
    data = json.loads(MANIFEST.read_text())
    errors = []
    for record in data["images"]:
        if record["status"] != "downloaded":
            continue
        path = ROOT / record["path"]
        if not path.is_file():
            errors.append(f"Missing file: {record['path']}")
            continue
        content = path.read_bytes()
        if not is_image(content) or hashlib.sha256(content).hexdigest() != record["sha256"]:
            errors.append(f"Invalid image or checksum: {record['path']}")
    print(json.dumps({**data["summary"], "invalid_local_images": errors}, ensure_ascii=False))
    if errors:
        raise SystemExit(1)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--archive-index", type=Path, help="CDX JSON with original,timestamp,mimetype,digest,length fields")
    parser.add_argument("--workers", type=int, default=6)
    parser.add_argument("--apply", action="store_true", help="Replace only URLs whose image has been downloaded and validated")
    parser.add_argument("--check", action="store_true", help="Verify local image files and checksums without downloading")
    args = parser.parse_args()
    if args.check:
        check_manifest()
        return
    index = {}
    if args.archive_index:
        rows = json.loads(args.archive_index.read_text())
    else:
        query = urlencode({"url": "static.vue-js.com/*", "output": "json", "filter": "statuscode:200", "collapse": "urlkey", "fl": "original,timestamp,mimetype,digest,length"})
        with tempfile.TemporaryDirectory(prefix="web-interview-index-") as directory:
            temporary = Path(directory) / "index.json"
            fetch(f"https://web.archive.org/cdx/search/cdx?{query}", temporary)
            rows = json.loads(temporary.read_text())
    for row in rows[1:]:
        parsed = urlsplit(row[0])
        index[(parsed.hostname, parsed.path)] = row
    old = json.loads(MANIFEST.read_text())["images"] if MANIFEST.exists() else []
    previous = {row["url"]: row for row in old}
    references = inventory()
    records = [row for row in old if row["url"] not in references and row["status"] == "downloaded"]
    print(f"Found {len(references)} external image URLs; archive index has {len(index)} entries.", flush=True)
    with ThreadPoolExecutor(max_workers=max(1, min(args.workers, 12))) as pool:
        futures = [pool.submit(recover, url, files, index, previous.get(url, {})) for url, files in references.items()]
        for count, future in enumerate(as_completed(futures), 1):
            records.append(future.result())
            if count % 20 == 0 or count == len(futures):
                summary = write_manifest(records)
                print(f"Processed {count}/{len(futures)}: {summary['downloaded']} downloaded, {summary['unresolved']} unresolved.", flush=True)
    summary = write_manifest(records)
    if args.apply:
        print(f"Updated {apply_references(records)} documentation/theme files.", flush=True)
    print(json.dumps(summary), flush=True)


if __name__ == "__main__":
    try:
        main()
    finally:
        CLIENT.close()
