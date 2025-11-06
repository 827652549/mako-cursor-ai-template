# 🚀 Next.js MVP Starter Template

> **5 分钟启动你的全栈应用** | 开箱即用的现代化 MVP 模板

一个功能完整、生产就绪的 Next.js 全栈应用模板，集成了认证、数据库、UI 组件库和部署配置，让你专注于业务逻辑而非基础设施搭建。

## ✨ 核心特性

- 🎨 **现代化 UI** - shadcn/ui 组件库（40+ 组件）+ Tailwind CSS v4
- 🔐 **开箱即用的认证** - Better Auth，支持登录/注册/会话管理（24小时持久化）
- 🗄️ **类型安全的数据库** - Drizzle ORM + PostgreSQL，完整的 schema 和迁移支持
- 🌍 **国际化支持** - 中英双语切换，语言偏好自动保存
- 🎭 **主题切换** - 深色/浅色/系统模式，完美适配
- 📊 **完整 Dashboard** - 预置的仪表盘布局和示例页面
- 🐳 **Docker 支持** - 一键启动开发环境（Next.js + PostgreSQL）
- ⚡ **性能优化** - Next.js 16 App Router + React 19，服务端渲染优先
- 🔧 **开发体验** - TypeScript + ESLint，类型安全，代码规范

## 🎯 为什么选择这个模板？

### 传统方式 vs 使用模板

**传统方式：**
```
搭建项目结构 → 配置认证系统 → 集成数据库 → 选择 UI 库 → 
配置主题系统 → 设置 Docker → 实现国际化 → ... 
⏱️ 预计耗时：2-3 天
```

**使用本模板：**
```bash
git clone <repo>
cd mako-cursor-ai-template
docker-compose up
```
⏱️ **5 分钟即可开始开发业务功能**

## 🚀 快速开始

### 方式一：Docker（推荐，最简单）

```bash
# 1. 克隆项目
git clone <your-repo-url>
cd mako-cursor-ai-template

# 2. 配置环境变量
cp .env.example .env
# 编辑 .env 文件，设置 BETTER_AUTH_SECRET（至少 32 个字符）

# 3. 一键启动（包含数据库）
docker-compose up
```

访问 http://localhost:3000，完成！🎉

### 方式二：本地开发

```bash
# 1. 安装依赖
bun install  # 或 npm install

# 2. 启动数据库
bun run db:up

# 3. 初始化数据库
bun run db:push

# 4. 启动开发服务器
bun run dev
```

## 📦 技术栈

| 类别 | 技术 |
|------|------|
| **前端** | Next.js 16, React 19, TypeScript |
| **样式** | Tailwind CSS v4, shadcn/ui |
| **认证** | Better Auth |
| **数据库** | PostgreSQL + Drizzle ORM |
| **部署** | Docker, Docker Compose |
| **测试** | Jest + React Testing Library |

## 🎨 功能预览

- ✅ 用户认证（登录/注册/登出）
- ✅ 会话管理（24小时持久化）
- ✅ 响应式 Dashboard 布局
- ✅ 组件库展示页面（20+ 组件示例）
- ✅ 主题切换（深色/浅色模式）
- ✅ 中英双语支持
- ✅ 数据库迁移脚本
- ✅ API 路由示例

## 📁 项目结构

```
src/
├── app/              # Next.js 页面和路由
│   ├── api/          # API 路由（认证、健康检查）
│   ├── dashboard/    # 仪表盘页面
│   ├── components/   # 组件展示页面
│   └── sign-in/      # 登录/注册页面
├── components/        # React 组件
│   └── ui/           # shadcn/ui 组件库
├── db/               # 数据库配置和 schema
├── lib/              # 库文件（认证、工具函数）
└── hooks/            # 自定义 Hooks
```

## 🛠️ 可用脚本

```bash
# 开发
bun run dev          # 启动开发服务器
bun run build        # 构建生产版本
bun run start        # 启动生产服务器

# 代码质量
bun run lint         # 运行 ESLint 检查
bun run lint:fix     # 自动修复 ESLint 问题

# 数据库
bun run db:up        # 启动数据库
bun run db:push      # 推送 schema 到数据库
bun run db:generate  # 生成迁移文件
bun run db:studio    # 打开 Drizzle Studio
```

## 📚 文档

- [项目设置指南](./SETUP.md) - 详细的安装和配置说明
- [组件库文档](./src/components/README.md) - UI 组件使用指南
- [API 文档](./src/app/api/README.md) - API 路由说明

## 🎯 下一步

1. **自定义品牌** - 修改 logo、颜色主题、应用名称
2. **添加业务功能** - 在 `/app/dashboard` 下创建新的功能页面
3. **扩展 API** - 在 `/app/api` 下添加新的 API 路由
4. **数据库扩展** - 在 `/db/schema` 中添加新的数据表

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

**开始构建你的下一个 MVP，而不是重新发明轮子。** 🚀
