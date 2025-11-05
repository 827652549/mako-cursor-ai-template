# App Router

Next.js App Router 路由和页面目录。

## 目录说明

此目录遵循 Next.js 16 App Router 规范，使用文件系统路由。

## 文件规范

- `layout.tsx` - 根布局组件，定义全局 HTML 结构
- `page.tsx` - 页面组件，对应路由的页面内容
- `globals.css` - 全局样式文件
- `favicon.ico` - 网站图标

## 路由规则

- 文件夹名称对应路由路径
- `page.tsx` 文件定义该路由的页面组件
- `layout.tsx` 文件定义该路由的布局组件
- 动态路由使用 `[param]` 文件夹名称

## 注意事项

- 此目录的文件使用 Next.js 的特殊导出方式（default export）
- 这是 Next.js App Router 的要求，与项目其他地方的命名导出规范不同
- 添加新路由时，在此目录下创建对应的文件夹和 `page.tsx` 文件

