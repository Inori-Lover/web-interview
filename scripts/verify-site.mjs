import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readdir, readFile, stat } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { basename, extname, relative, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { tokenizeChinese } from '../docs/.vitepress/search.ts'

const root = fileURLToPath(new URL('../', import.meta.url))
const docs = resolve(root, 'docs')
const dist = resolve(docs, '.vitepress/dist')
const base = '/'

async function walk(directory, excluded = []) {
  const files = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (excluded.includes(entry.name)) continue
    const path = resolve(directory, entry.name)
    if (entry.isDirectory()) files.push(...await walk(path, excluded))
    else files.push(path)
  }
  return files
}

const sourcePages = (await walk(docs, ['.vitepress', 'assets'])).filter((path) => path.endsWith('.md'))
for (const page of sourcePages) {
  const output = resolve(dist, relative(docs, page).replace(/\.md$/, '.html'))
  assert.ok((await stat(output)).isFile(), `文章没有生成：${relative(docs, page)}`)
}

const manifest = JSON.parse(await readFile(resolve(root, 'scripts/image-migration.json'), 'utf8'))
const restored = manifest.images.filter((image) => image.status === 'downloaded')
for (const image of restored) {
  const data = await readFile(resolve(root, image.path))
  assert.equal(createHash('sha256').update(data).digest('hex'), image.sha256, `图片校验值变化：${image.path}`)
}
for (const image of manifest.images) {
  for (const reference of image.references) assert.ok((await stat(resolve(root, reference))).isFile(), `图片清单引用了不存在的文档：${reference}`)
}

const decode = (value) => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'")
const canonical = (value) => decodeURIComponent(decode(value))
const knownRemote = new Set(manifest.images.filter((image) => image.status === 'unresolved').map((image) => canonical(image.url)))
const localImages = new Set()
const inlineImages = new Set()
const remoteImages = new Set()
const failures = []
const htmlFiles = (await walk(dist)).filter((path) => path.endsWith('.html'))

for (const path of htmlFiles) {
  const html = await readFile(path, 'utf8')
  const pageUrl = new URL(base + relative(dist, path).replaceAll('\\', '/'), 'https://site.test')
  for (const match of html.matchAll(/<(a|img|script|link)\b[^>]*?\b(href|src)="([^"]*)"[^>]*>/g)) {
    const [, tag, , raw] = match
    const value = decode(raw)
    if (!value || value.startsWith('javascript:') || value.startsWith('mailto:') || value.startsWith('tel:')) continue
    if (value.startsWith('data:')) {
      if (tag === 'img') inlineImages.add(value)
      continue
    }
    const target = new URL(value, pageUrl)
    if (target.origin !== pageUrl.origin) {
      if (tag === 'img') {
        remoteImages.add(value)
        if (!knownRemote.has(canonical(value))) failures.push(`未记录的外链图片：${value}`)
      }
      continue
    }
    if (!target.pathname.startsWith(base)) {
      failures.push(`链接缺少部署前缀：${value}（${relative(dist, path)}）`)
      continue
    }
    let localPath = decodeURIComponent(target.pathname.slice(base.length))
    if (localPath.endsWith('/') || !localPath) localPath += 'index.html'
    else if (!extname(localPath)) localPath += '.html'
    const output = resolve(dist, localPath)
    try {
      assert.ok((await stat(output)).isFile())
      if (tag === 'img') localImages.add(target.pathname)
    } catch {
      failures.push(`链接目标不存在：${value}（${relative(dist, path)}）`)
    }
  }
}

assert.ok(localImages.size > 0, '生产页面没有引用本地图片')
assert.ok([...localImages].some((url) => url.includes('4402c560-3ac6-11eb-85f6-6fac77c0c9b3')), 'MVVM 原图没有出现在生产页面中')
assert.deepEqual(failures, [], '生产页面存在无效链接或图片引用')

const indexFiles = (await walk(dist)).filter((path) => basename(path).startsWith('@localSearchIndexroot.'))
assert.equal(indexFiles.length, 1, '生产构建缺少中文搜索索引')
const rawIndex = (await import(pathToFileURL(indexFiles[0]).href)).default
const searchData = JSON.parse(rawIndex)
const MiniSearch = createRequire(import.meta.resolve('vitepress'))('minisearch')
const searchIndex = MiniSearch.loadJSON(rawIndex, { fields: Object.keys(searchData.fieldIds), tokenize: tokenizeChinese })
const queries = {
  闭包: '/JavaScript/closure.html',
  作用域: '/JavaScript/scope.html',
  防抖: '/JavaScript/debounce_throttle.html',
  二分查找: '/algorithm/BinarySearch.html',
}
for (const [query, expected] of Object.entries(queries)) {
  const results = searchIndex.search(query, { prefix: true, fuzzy: 0.2 })
  assert.ok(results.slice(0, 10).some((result) => result.id.startsWith(expected + '#')), `搜索未命中目标文章：${query}`)
}
const fromVue = createRequire(import.meta.resolve('vue'))
const vueVersion = fromVue('vue/package.json').version
assert.equal(fromVue('@vue/compiler-sfc/package.json').version, vueVersion, 'Vue 运行时与编译器版本不同')
const frameworkFile = (await walk(dist)).find((path) => basename(path).startsWith('framework.') && path.endsWith('.js'))
assert.ok(frameworkFile && (await readFile(frameworkFile, 'utf8')).includes(vueVersion), '生产页面未打包当前 Vue 运行时')
console.log(JSON.stringify({
  vueVersion,
  sourcePages: sourcePages.length,
  htmlPages: htmlFiles.length,
  verifiedImageFiles: restored.length,
  emittedImages: localImages.size,
  inlineImages: inlineImages.size,
  unresolvedRemoteImages: remoteImages.size,
  searchSections: searchData.documentCount,
  verifiedSearchQueries: Object.keys(queries),
  failures: failures.length,
}, null, 2))
