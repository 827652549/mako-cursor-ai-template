# API Routes

Next.js API 路由目录。

## 目录说明

此目录包含所有 API 端点，遵循 Next.js App Router 的文件系统路由规范。

## 路由规则

- 每个文件夹对应一个 API 端点路径
- `route.ts` 文件定义该端点的处理逻辑
- 支持 HTTP 方法：GET, POST, PUT, PATCH, DELETE

## 示例结构

```
api/
  auth/
    [...all]/
      route.ts  # /api/auth/* 处理所有认证相关请求
  users/
    route.ts    # /api/users 处理用户相关请求
    [id]/
      route.ts  # /api/users/:id 处理单个用户请求
```

## 注意事项

- 所有 API 路由都应该进行错误处理
- 使用 `apiClient` 和 `errorHandler` 工具函数保持一致性
- 认证相关的路由应该使用 Better Auth（计划中）
- API 响应格式应遵循项目规范（参考 `800-api-standards.mdc`）

