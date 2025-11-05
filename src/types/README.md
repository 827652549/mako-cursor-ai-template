# Types

TypeScript类型定义目录。

## 类型规范

- 类型定义应该与业务逻辑相关
- 通用类型放在 `index.ts`
- 特定模块的类型可以放在对应的service或component文件中
- 根目录的 `types/` 用于路由等框架相关类型

## 与根目录types的区别

- `src/types/` - 业务相关类型定义
- `types/` - 路由、验证器等框架相关类型

