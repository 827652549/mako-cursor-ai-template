# 数据库配置

## 目录说明

- `index.ts` - 数据库连接配置，使用 Drizzle ORM 和 PostgreSQL
- `schema/` - 数据库 schema 定义
  - `auth.ts` - 认证相关的表结构（user, session, account, verification）

## 使用方法

### 1. 配置环境变量

创建 `.env` 文件（参考 `.env.example`）：

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/mydb
BETTER_AUTH_SECRET=your-secret-key-min-32-characters
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

### 2. 启动数据库

使用 Docker Compose：

```bash
# 启动数据库
bun run db:up

# 停止数据库
bun run db:down
```

### 3. 运行数据库迁移

```bash
# 生成迁移文件
bun run db:generate

# 推送 schema 到数据库（开发环境）
bun run db:push

# 运行迁移（生产环境）
bun run db:migrate
```

### 4. 打开 Drizzle Studio（可选）

```bash
bun run db:studio
```

## Schema 说明

### User 表
- `id` - 用户 ID（主键）
- `name` - 用户名称
- `email` - 邮箱（唯一）
- `emailVerified` - 邮箱是否已验证
- `image` - 头像 URL
- `createdAt` - 创建时间
- `updatedAt` - 更新时间

### Session 表
- `id` - 会话 ID（主键）
- `expiresAt` - 过期时间
- `token` - 会话令牌（唯一）
- `userId` - 用户 ID（外键）
- `ipAddress` - IP 地址
- `userAgent` - 用户代理

### Account 表
- `id` - 账户 ID（主键）
- `accountId` - 账户标识
- `providerId` - 提供商 ID
- `userId` - 用户 ID（外键）
- `password` - 密码（加密）
- `accessToken` - 访问令牌
- `refreshToken` - 刷新令牌

### Verification 表
- `id` - 验证 ID（主键）
- `identifier` - 标识符（如邮箱）
- `value` - 验证值（如验证码）
- `expiresAt` - 过期时间

