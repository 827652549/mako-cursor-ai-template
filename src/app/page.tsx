'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useSession, signOut } from "@/lib/auth-client";
import { useI18n } from "@/hooks/useI18n";
import { Loader2, LogOut, Sparkles } from "lucide-react";

/**
 * 首页
 * 简洁的启动页面，提供登录和注册入口
 * 如果用户已登录，显示进入后台的按钮和退出登录按钮
 */
export default function Home() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const { t } = useI18n();
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
        <div className="fixed top-4 right-4 flex gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
        <main className="text-center space-y-6 px-4">
          <Loader2 className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
          <p className="text-lg text-muted-foreground">{t('common.loading')}</p>
        </main>
      </div>
    );
  }

  // 如果已登录，显示欢迎信息和进入后台按钮
  if (session?.user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="fixed top-4 right-4 flex gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
        <main className="text-center space-y-6 px-4">
          <h1 className="text-4xl font-bold text-foreground">
            {t('home.welcomeBack', { name: session.user.name || session.user.email })}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('home.loggedInMessage')}
          </p>
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/dashboard">{t('home.enterDashboard')}</Link>
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
                    {t('home.signingOut')}
                  </>
                ) : (
                  <>
                    <LogOut className="mr-2 h-4 w-4" />
                    {t('home.signOut')}
                  </>
                )}
              </Button>
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link href="/components">
                <Sparkles className="mr-2 h-4 w-4" />
                {t('home.viewComponents')}
              </Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  // 未登录，显示登录/注册页面
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="fixed top-4 right-4 flex gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      <main className="text-center space-y-6 px-4">
        <h1 className="text-4xl font-bold text-foreground">
          {t('home.welcome')}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t('home.startBuilding')}
        </p>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/sign-in">{t('home.signIn')}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/sign-up">{t('home.signUp')}</Link>
            </Button>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href="/components">
              <Sparkles className="mr-2 h-4 w-4" />
              {t('home.viewComponents')}
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
