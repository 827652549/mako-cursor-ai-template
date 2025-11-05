import { ReactNode } from 'react';

/**
 * Dashboard 布局组件
 * 提供统一的 Dashboard 页面布局，包括侧边栏和主内容区
 */
export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* 侧边栏 */}
      <aside className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <nav className="p-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Dashboard
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/dashboard"
                className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                首页
              </a>
            </li>
            <li>
              <a
                href="/dashboard/profile"
                className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                个人资料
              </a>
            </li>
            <li>
              <a
                href="/dashboard/settings"
                className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                设置
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* 主内容区 */}
      <main className="flex-1 p-8 bg-gray-50 dark:bg-gray-950">
        {children}
      </main>
    </div>
  );
}

