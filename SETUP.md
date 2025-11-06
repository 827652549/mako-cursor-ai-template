# 项目设置指南

## 快速开始

### 1. 安装依赖

```bash
bun install
```

### 2. 配置环境变量

复制 `.env.example` 到 `.env` 并填写必要的配置：

```bash
cp .env.example .env
```

编辑 `.env` 文件，设置以下变量：

```env
# 数据库连接
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/mydb

# Better Auth 配置
BETTER_AUTH_SECRET=your-secret-key-min-32-characters-long
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

**重要**：`BETTER_AUTH_SECRET` 必须至少 32 个字符，生产环境请使用强随机密钥。

### 3. 启动数据库

```bash
# 使用 Docker Compose 启动 PostgreSQL
bun run db:up
```

### 4. 初始化数据库

```bash
# 推送 schema 到数据库
bun run db:push
```

或者生成迁移文件：

```bash
# 生成迁移文件
bun run db:generate

# 运行迁移
bun run db:migrate
```

### 5. 启动开发服务器

```bash
bun run dev
```

访问 http://localhost:3000

## 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API 路由
│   │   └── auth/          # 认证 API
│   ├── dashboard/         # 仪表盘页面
│   ├── sign-in/           # 登录页面
│   ├── sign-up/           # 注册页面
│   └── page.tsx           # 首页
├── components/            # React 组件
│   ├── ui/               # shadcn/ui 组件
│   └── ...               # 其他组件
├── db/                    # 数据库配置
│   ├── schema/           # 数据库 schema
│   └── index.ts          # 数据库连接
├── hooks/                # React Hooks
├── lib/                  # 库文件
│   ├── auth.ts           # Better Auth 配置
│   ├── auth-client.ts    # 客户端认证
│   └── utils.ts          # 工具函数
├── services/             # 业务逻辑服务
├── types/                # TypeScript 类型
└── utils/                # 工具函数
```

## 可用脚本

- `bun run dev` - 启动开发服务器
- `bun run build` - 构建生产版本
- `bun run start` - 启动生产服务器
- `bun run lint` - 运行 ESLint 检查
- `bun run lint:fix` - 自动修复 ESLint 问题
- `bun run test` - 运行测试
- `bun run db:up` - 启动数据库
- `bun run db:down` - 停止数据库
- `bun run db:push` - 推送 schema 到数据库
- `bun run db:generate` - 生成迁移文件
- `bun run db:studio` - 打开 Drizzle Studio

## 功能特性

### ✅ 已实现

- [x] Next.js 16 App Router
- [x] React 19
- [x] TypeScript
- [x] Tailwind CSS v4
- [x] shadcn/ui 组件库
- [x] 主题切换（深色/浅色模式）
- [x] Better Auth 认证系统
- [x] Drizzle ORM + PostgreSQL
- [x] 登录/注册页面
- [x] 仪表盘布局和页面
- [x] 响应式设计
- [x] ESLint 代码检查
- [x] Jest + React Testing Library

### 🔄 待实现

- [ ] 邮件服务集成（用于密码重置）
- [ ] OAuth 登录（Google, GitHub 等）
- [ ] 用户资料管理
- [ ] 权限系统
- [ ] API 文档

## 开发注意事项

1. **代码质量**：提交前必须通过 `bun run lint`
2. **环境变量**：不要提交 `.env` 文件到版本控制
3. **数据库迁移**：生产环境使用 `db:migrate`，开发环境可以使用 `db:push`
4. **类型安全**：充分利用 TypeScript 类型检查

## 故障排除

### 数据库连接失败

1. 确保 PostgreSQL 正在运行：`bun run db:up`
2. 检查 `DATABASE_URL` 环境变量是否正确
3. 确认数据库端口 5432 未被占用

### 认证功能不工作

1. 检查 `BETTER_AUTH_SECRET` 是否已设置（至少 32 个字符）
2. 确认 `BETTER_AUTH_URL` 和 `NEXT_PUBLIC_BETTER_AUTH_URL` 配置正确
3. 确保数据库 schema 已初始化：`bun run db:push`

### 组件样式问题

1. 确保 Tailwind CSS 配置正确
2. 检查 `globals.css` 是否已导入
3. 确认主题变量已定义

## 更多信息

- [Next.js 文档](https://nextjs.org/docs)
- [Better Auth 文档](https://www.better-auth.com/docs)
- [Drizzle ORM 文档](https://orm.drizzle.team/docs/overview)
- [shadcn/ui 文档](https://ui.shadcn.com)

