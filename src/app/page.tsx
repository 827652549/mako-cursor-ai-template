'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

/**
 * 首页
 * 简洁的启动页面，提供登录和注册入口
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
        <p className="text-lg text-muted-foreground">
          开始构建你的应用
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/sign-in">登录</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sign-up">注册</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
