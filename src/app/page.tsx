'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useSession, signOut } from "@/lib/auth-client";
import { Loader2, LogOut } from "lucide-react";

/**
 * 首页
 * 简洁的启动页面，提供登录和注册入口
 * 如果用户已登录，显示进入后台的按钮和退出登录按钮
 */
export default function Home() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await signOut();
      // 退出成功后刷新页面，显示未登录状态
      router.refresh();
    } catch (error) {
      console.error("Sign out error:", error);
    } finally {
      setIsSigningOut(false);
    }
  };

  // 如果正在检查登录状态，显示加载状态
  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="fixed top-4 right-4">
          <ThemeToggle />
        </div>
        <main className="text-center space-y-6 px-4">
          <Loader2 className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
          <p className="text-lg text-muted-foreground">加载中...</p>
        </main>
      </div>
    );
  }

  // 如果已登录，显示欢迎信息和进入后台按钮
  if (session?.user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="fixed top-4 right-4">
          <ThemeToggle />
        </div>
        <main className="text-center space-y-6 px-4">
          <h1 className="text-4xl font-bold text-foreground">
            欢迎回来，{session.user.name || session.user.email}
          </h1>
          <p className="text-lg text-muted-foreground">
            你已经登录，可以进入后台管理
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/dashboard">进入后台</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleSignOut}
              disabled={isSigningOut}
            >
              {isSigningOut ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  退出中...
                </>
              ) : (
                <>
                  <LogOut className="mr-2 h-4 w-4" />
                  退出登录
                </>
              )}
            </Button>
          </div>
        </main>
      </div>
    );
  }

  // 未登录，显示登录/注册页面
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
