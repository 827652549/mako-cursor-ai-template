import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/hooks/useI18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mako Cursor AI Template",
  description: "Next.js MVP Starter Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className="antialiased">
        <I18nProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

