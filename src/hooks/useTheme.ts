'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export type ResolvedTheme = 'light' | 'dark';

/**
 * 获取系统主题
 */
function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * 主题 Hook
 * 管理应用的主题状态，支持 light、dark 和 system 三种模式
 * @returns 主题状态和控制函数
 */
export function useTheme() {
  // 使用初始化函数从 localStorage 读取主题
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'system';
    const stored = localStorage.getItem('theme') as Theme | null;
    return stored || 'system';
  });

  // 计算 resolvedTheme，使用 useMemo 避免不必要的计算
  const resolvedTheme = useMemo<ResolvedTheme>(() => {
    if (theme === 'system') {
      return getSystemTheme();
    }
    return theme;
  }, [theme]);

  /**
   * 应用主题到文档
   */
  const applyThemeToDocument = useCallback((themeToApply: 'light' | 'dark') => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(themeToApply);
  }, []);

  /**
   * 应用主题
   */
  const applyTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  }, []);

  // 初始化时应用主题到文档
  useEffect(() => {
    applyThemeToDocument(resolvedTheme);
  }, [applyThemeToDocument, resolvedTheme]);

  // 监听系统主题变化（仅在 system 模式下）
  useEffect(() => {
    if (theme !== 'system') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateSystemTheme = () => {
      // 在事件回调中 setState 是允许的，但这里我们只需要更新 DOM
      const systemTheme = mediaQuery.matches ? 'dark' : 'light';
      applyThemeToDocument(systemTheme);
    };

    updateSystemTheme();
    mediaQuery.addEventListener('change', updateSystemTheme);

    return () => {
      mediaQuery.removeEventListener('change', updateSystemTheme);
    };
  }, [theme, applyThemeToDocument]);

  /**
   * 切换主题
   */
  const toggleTheme = useCallback(() => {
    const nextTheme: Theme = resolvedTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  }, [resolvedTheme, applyTheme]);

  return {
    theme,
    resolvedTheme,
    setTheme: applyTheme,
    toggleTheme,
  };
}
