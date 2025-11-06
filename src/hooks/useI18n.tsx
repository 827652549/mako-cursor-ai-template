'use client';

import { useState, useEffect, createContext, useContext, ReactNode, type ReactElement } from 'react';
import { Locale, defaultLocale, getTranslation } from '@/lib/i18n';

const LOCALE_STORAGE_KEY = 'app-locale';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }
  const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
  if (savedLocale && (savedLocale === 'zh' || savedLocale === 'en')) {
    return savedLocale;
  }
  return defaultLocale;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    }
  };

  const t = (key: string, params?: Record<string, string | number>) => {
    return getTranslation(locale, key, params);
  };

  // Always provide context
  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

