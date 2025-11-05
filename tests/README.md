# Tests

测试文件目录，包含所有测试相关的代码和工具。

## 目录结构

- `fixtures/` - 测试数据文件，包含模拟数据
- `utils/` - 测试工具函数，包含测试辅助方法

## 测试文件组织

根据测试规范，测试文件应该与源文件放在同一目录下：
- 组件测试：`src/components/[ComponentName].test.tsx`
- Hook 测试：`src/hooks/[hookName].test.ts`
- 服务测试：`src/services/[serviceName].test.ts`
- 工具测试：`src/utils/[utilName].test.ts`

## 测试数据

测试数据放在 `tests/fixtures/` 目录下，用于：
- 模拟 API 响应
- 提供测试用的常量数据
- 创建测试用的对象实例

## 测试工具

测试工具放在 `tests/utils/` 目录下，包含：
- 测试渲染辅助函数
- Mock 数据生成器
- 测试环境配置

## 注意事项

- 测试文件命名使用 `.test.tsx` 或 `.spec.tsx` 格式
- 使用 Jest + React Testing Library 进行单元测试
- 使用 Cypress 进行端到端测试（如需要）

