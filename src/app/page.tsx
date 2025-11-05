import { ThemeToggle } from "@/components/ThemeToggle";

/**
 * 首页
 * 简洁的启动页面，可根据需要自定义
 */
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
      <main className="text-center space-y-6 px-4">
        <h1 className="text-4xl font-bold text-foreground">
          Welcome
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          开始构建你的应用
        </p>
      </main>
    </div>
  );
}
