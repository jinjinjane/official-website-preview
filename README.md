# Jovida React

Jovida 是一款围绕 Jovida 健康助手打造的营销和用户引导体验。本项目基于 React + Vite，最初由 Anima 生成，并在此基础上进行了结构化整理与工程化优化。

## 核心特点
- 使用 React Router 实现 Home、Login、Login Success、Message、Pro 与 Privacy Policy 等多页面导航。
- `src/components` 与 `src/icons` 中沉淀了可复用的 UI 组件与 SVG 包装，方便扩展。
- Storybook 8 已配置，可用于组件级开发、调试与视觉验收。
- 静态资源集中存放在 `public/` 与 `static/`，保持与设计稿的像素级一致。

## 环境要求
- Node.js 18.0.0 及以上（与当前 Vite 6 工具链匹配）。
- npm 9 及以上（Node.js 18 自带版本即可）。

## 快速开始
安装依赖并启动开发服务器：

```bash
npm install
npm run dev
```

默认访问地址为 http://localhost:5173，Vite 会自动进行热更新，React 组件与样式修改将即时生效。

## Storybook
在独立端口启动组件工作台：

```bash
npm run storybook
```

Storybook 运行在 http://localhost:6006，使用与应用相同的组件与样式。需要生成静态 Storybook 站点时，可执行 `npm run build-storybook`。

## 可用脚本
| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动带有热更新的 Vite 开发生命服务。 |
| `npm run build` | 构建生产环境静态资源，输出至 `dist/`。 |
| `npm run storybook` | 在 6006 端口启动 Storybook 调试环境。 |
| `npm run build-storybook` | 产出位于 `storybook-static/` 的 Storybook 静态站点。 |

## 项目结构
```
/
├─ public/             # 直接对外暴露的静态资源（SVG、图标等）
├─ src/
│  ├─ App.jsx          # React Router 路由配置
│  ├─ breakpoints.js   # Anima 导出的响应式断点辅助
│  ├─ components/      # 可复用的 UI 组件
│  ├─ icons/           # SVG 图标的 React 包装组件
│  ├─ screens/         # 各路由页面（HomePage、Login、Message、Pro、Privacy 等）
│  └─ index.jsx        # 应用入口与 ReactDOM 渲染
├─ static/             # 设计稿导出的额外资源
├─ vite.config.js      # Vite 配置文件
└─ package.json        # 项目脚本与依赖声明
```

## 样式与资源
- 全局及页面样式存放在与组件同级的 `*.css` 文件中，便于按需维护。
- 图片通常通过 `/img/` 路径引用自 `public/`，更新后无需重新构建即可生效。
- 若新增响应式断点，请同步更新 `src/breakpoints.js` 中的设计变量，以保持一致性。

## 部署
执行以下命令生成生产环境构建：

```bash
npm run build
```

构建产物位于 `dist/`，可直接部署至任意静态资源托管平台（如 Vercel、Netlify、S3 等）。本地验证时，可使用轻量级静态服务器（例如执行 `npx serve dist`）。

## 排查指南
- 若 Vite 无法启动，请确认 Node.js 版本是否满足 18 及以上。
- Storybook 首次编译耗时较长，后续热更新为增量构建。
- 如果页面缺图，请检查 `public/img/` 中的文件是否存在，以及引用路径是否以 `/img/` 开头。
