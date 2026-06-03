# 大数据技术知识体系

这是一个基于 VitePress 构建的个人大数据技术知识库，用于沉淀数据采集、湖仓一体、Spark/Flink 计算、数据建模、数据治理、性能优化和真实排查案例。

## 技术栈

- VitePress
- Markdown
- TypeScript
- Mermaid 代码块
- VitePress local search

## 本地开发

安装依赖：

```bash
npm install
```

启动本地开发服务：

```bash
npm run docs:dev
```

构建静态文件：

```bash
npm run docs:build
```

本地预览构建结果：

```bash
npm run docs:preview
```

构建后的文件会生成在：

```text
docs/.vitepress/dist
```

## 一键启动

macOS / Linux 可以使用：

```bash
chmod +x start.sh
./start.sh
```

这个脚本会自动安装依赖并启动本地开发服务。

## GitHub Pages 部署方式

本项目支持通过 GitHub Actions 自动部署到 GitHub Pages。

### 1. 推送代码到 GitHub

```bash
git add .
git commit -m "init knowledge website"
git push origin main
```

### 2. 开启 GitHub Pages

进入 GitHub 仓库：

```text
Settings -> Pages
```

在 Build and deployment 中选择：

```text
Source: GitHub Actions
```

### 3. 检查 VitePress base 配置

如果仓库名是：

```text
bigdata-knowledge-system
```

则需要在：

```text
docs/.vitepress/config.ts
```

中配置：

```ts
base: '/bigdata-knowledge-system/'
```

如果仓库名不同，请改成：

```ts
base: '/你的仓库名/'
```

如果仓库是：

```text
username.github.io
```

则配置为：

```ts
base: '/'
```

### 4. 自动部署

每次 push 到 `main` 分支后，GitHub Actions 会自动执行：

```bash
npm ci
npm run docs:build
```

然后将：

```text
docs/.vitepress/dist
```

部署到 GitHub Pages。

### 5. 访问地址

部署成功后，可以通过以下地址访问：

```text
https://你的用户名.github.io/仓库名/
```

例如：

```text
https://你的用户名.github.io/bigdata-knowledge-system/
```

如果是用户主页仓库：

```text
https://你的用户名.github.io/
```

## 为什么不建议直接双击 HTML 打开？

VitePress 构建后虽然是静态文件，但不建议直接使用：

```text
file:///xxx/index.html
```

方式打开。

原因是：

1. 路由跳转可能异常。
2. 静态资源路径可能异常。
3. 搜索功能可能异常。
4. 样式和脚本加载可能不完整。

推荐使用以下方式访问：

1. 本地开发：`npm run docs:dev`
2. 本地预览：`npm run docs:preview`
3. 线上访问：GitHub Pages URL

## 目录说明

- `docs/index.md`：首页和知识地图。
- `docs/guide`：知识体系方法、学习路径和问题模板。
- `docs/collection`：数据采集专题。
- `docs/storage`：数据存储专题。
- `docs/compute`：Spark、Flink、ClickHouse 等计算专题。
- `docs/lakehouse`：湖仓一体架构专题。
- `docs/modeling`：数据建模专题。
- `docs/governance`：数据治理专题。
- `docs/optimization`：性能优化专题。
- `docs/questions`：问题库。
- `docs/cases`：实战案例。
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署工作流。

## 如何新增文章

1. 在对应专题目录下新增 Markdown 文件。
2. 按“是什么、为什么、怎么做、适用场景、注意事项、总结输出”的方式组织内容。
3. 在 `docs/.vitepress/config.ts` 的 `sidebar` 中增加入口。
4. 如需从首页跳转，在 `docs/index.md` 中补充卡片或问题入口。

## 后续规划

- 增加 Spark SQL 优化系列。
- 增加 Flink CDC 和 Paimon 原理专题。
- 增加 ClickHouse / ByteHouse 查询优化专题。
- 增加数据建模和数据治理案例。
- 增加真实问题排查案例。
- 增加标签和知识点双向链接。
