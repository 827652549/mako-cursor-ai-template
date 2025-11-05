'use client';

import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export type ResolvedTheme = 'light' | 'dark';

/**
 * 主题 Hook
 * 管理应用的主题状态，支持 light、dark 和 system 三种模式
 * @returns 主题状态和控制函数
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  // 初始化主题
  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    const initialTheme = stored || 'system';
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  // 监听系统主题变化
  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const updateSystemTheme = () => {
        const systemTheme = mediaQuery.matches ? 'dark' : 'light';
        setResolvedTheme(systemTheme);
        applyThemeToDocument(systemTheme);
      };

      updateSystemTheme();
      mediaQuery.addEventListener('change', updateSystemTheme);

      return () => {
        mediaQuery.removeEventListener('change', updateSystemTheme);
      };
    } else {
      setResolvedTheme(theme);
      applyThemeToDocument(theme);
    }
  }, [theme]);

  /**
   * 应用主题
   */
  const applyTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      applyThemeToDocument(systemTheme);
      setResolvedTheme(systemTheme);
    } else {
      applyThemeToDocument(newTheme);
      setResolvedTheme(newTheme);
    }
  };

  /**
   * 应用主题到文档
   */
  const applyThemeToDocument = (themeToApply: 'light' | 'dark') => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(themeToApply);
  };

  /**
   * 切换主题
   */
  const toggleTheme = () => {
    const nextTheme: Theme = resolvedTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  };

  return {
    theme,
    resolvedTheme,
    setTheme: applyTheme,
    toggleTheme,
  };
}

