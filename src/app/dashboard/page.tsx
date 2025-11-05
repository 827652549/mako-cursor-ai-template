/**
 * Dashboard 首页
 * 显示欢迎信息和最近的活动
 */
export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        欢迎回来
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* 统计卡片示例 */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            总用户数
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            --
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            今日活跃
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            --
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            总订单
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            --
          </p>
        </div>
      </div>

      {/* 最近活动 */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          最近活动
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          暂无活动记录
        </p>
      </div>
    </div>
  );
}

