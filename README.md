# web-interview

基于 VitePress 的前端面试题库，包含 235 篇问答、15 个专题，支持中文全文搜索、深浅色主题和移动端阅读。

## 技术栈

| 工具 | 版本 |
| --- | --- |
| Node.js | 26.13.0 LTS |
| pnpm | 12.18.0 |
| VitePress | 2.0.0-alpha.21 |
| Vite | 8.3.6 |
| Vue | 3.6.0-rc.14 |
| TypeScript | typescript-native-bridge 6.0.3-bridge.17.tsgo.7.0.2 |

VitePress 使用 2.0 预览版；依赖版本及解析结果由 `package.json` 和 `pnpm-lock.yaml` 固定。运行时版本统一记录在 `mise.toml`，本地和 CI 使用同一套配置。

Vue 使用 3.6 RC，工作区覆盖规则统一 Vue 运行时、编译器和共享包版本。TypeScript 通过 npm 别名使用原生桥接包：向 `vue-tsc` 提供经典编译器接口，使用 tsgo 7.0.2 检查类型；各个工具解析到同一份编译器。

镜像源、依赖解析策略及引擎检查统一维护在 `pnpm-workspace.yaml`。

## 本地运行

已安装 [mise](https://mise.jdx.dev/) 时：

```sh
mise install
mise exec -- pnpm install --frozen-lockfile
mise exec -- pnpm dev
```

打开 <http://127.0.0.1:8080/>。也可以直接使用表格中的 Node.js 和 pnpm 版本运行相同命令。

## 检查与构建

```sh
pnpm run check
pnpm preview
```

`check` 包含 Vue/TypeScript 类型检查、导航与中文搜索测试、生产构建，以及页面链接和本地图片校验。单独构建使用 `pnpm build`，输出目录为 `docs/.vitepress/dist/`，部署在域名根路径 `/`。

CI 会检查 Pull Request 与 `master` 推送，不再执行原项目的 SSH 部署。

## Cloudflare Pages 部署

连接 GitHub 仓库 `Inori-Lover/web-interview`，使用以下构建配置：

| 设置 | 值 |
| --- | --- |
| Production branch | `master` |
| Root directory | 仓库根目录（留空） |
| Build command | `pnpm run check` |
| Build output directory | `docs/.vitepress/dist` |
| `NODE_VERSION` | `26.13.0` |
| `PNPM_VERSION` | `12.18.0` |

构建环境变量同时用于 Production 和 Preview。部署成功后，在 Pages 项目的 **Custom domains** 中添加 `interview.inori-lover.com`，按提示确认 DNS 记录；不要只单独添加 DNS CNAME。连接 Git 集成后，推送 `master` 会自动构建并部署。

## 目录

- `docs/index.md`：专题首页。
- `docs/README.md`：原项目说明。
- `docs/.vitepress/`：站点配置、专题导航和 Vue 3 主题扩展。
- `docs/assets/images/`：恢复到本地的图片。
- `scripts/image-migration.json`：图片来源、校验值和暂未恢复的链接。
- `scripts/localize_images.py`：后续图片恢复工具，用法见 [脚本说明](scripts/README.md)。
