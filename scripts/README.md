# 文档图片迁移

图片保存在 `docs/assets/images/<原域名>/`，正文使用相对路径交给 VuePress 打包，适配网站的 `/interview/` 路径。

`image-migration.json` 记录每张图片的原 URL、恢复来源、本地路径、引用文档、大小和 SHA-256。`unresolved` 表示未找到可用原图，文档保留原引用，方便以后补齐。徽章保存的是迁移时的静态副本。

再次下载并替换可恢复图片：

```sh
uv run --no-project scripts/localize_images.py --apply
```

只校验已经保存的图片和校验值：

```sh
uv run --no-project scripts/localize_images.py --check
```

脚本跳过 Markdown 代码示例和 HTML 注释，支持复用已下载的文件。失效图床的原图通过 Internet Archive 恢复，其他图片优先从原地址下载；重复执行可以继续尝试尚未恢复的图片。
