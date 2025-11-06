# 认证 API

## 路由说明

- `/api/auth/[...all]` - Better Auth 的所有认证端点

## 功能

- 用户注册（邮箱密码）
- 用户登录（邮箱密码）
- 用户登出
- 会话管理
- 密码重置（需要配置邮件服务）

## 使用方式

认证 API 由 Better Auth 自动处理，前端通过 `@/lib/auth-client` 使用。

### 示例

```typescript
import { signIn, signUp, signOut, useSession } from "@/lib/auth-client";

// 登录
await signIn.email({
  email: "user@example.com",
  password: "password123",
});

// 注册
await signUp.email({
  email: "user@example.com",
  password: "password123",
  name: "User Name",
});

// 登出
await signOut();

// 获取会话
const { data: session } = useSession();
```

## 配置

认证配置在 `src/lib/auth.ts` 中，需要设置以下环境变量：

- `BETTER_AUTH_SECRET` - 认证密钥（至少 32 个字符）
- `BETTER_AUTH_URL` - 认证服务 URL
- `NEXT_PUBLIC_BETTER_AUTH_URL` - 前端可访问的认证服务 URL
- `DATABASE_URL` - 数据库连接字符串

