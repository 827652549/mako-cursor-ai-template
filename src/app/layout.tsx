import type { Metadata } from "next";
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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

