# Dashboard

Dashboard 功能蓝图目录。

## 目录说明

此目录是功能蓝图的示例，展示如何组织和实现新的功能模块。

## 结构

- `layout.tsx` - Dashboard 布局组件，包含侧边栏和主内容区
- `page.tsx` - Dashboard 首页，展示欢迎信息和统计卡片

## 扩展功能

要添加新的功能模块，可以在此目录下创建新的子目录：

```
dashboard/
  products/
    page.tsx      # /dashboard/products
    layout.tsx    # 可选：自定义布局
  orders/
    page.tsx      # /dashboard/orders
    [id]/
      page.tsx    # /dashboard/orders/:id
```

## 注意事项

- 所有 Dashboard 页面都继承 `dashboard/layout.tsx` 的布局
- 可以使用嵌套布局创建更复杂的页面结构
- 遵循项目的组件和样式规范

