# Services

业务逻辑服务目录，包含所有API调用和业务处理逻辑。

## 服务规范

- 服务文件按功能模块划分，如 `userService.ts`
- 使用 `apiClient` 进行API调用
- 使用 `handleApiError` 统一处理错误
- 所有服务函数都应该有类型定义
- 导出接口类型供其他模块使用

## 示例

参考 `userService.ts` 了解标准服务结构。

