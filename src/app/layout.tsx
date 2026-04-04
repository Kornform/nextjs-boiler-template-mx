import type { Metadata, Viewport } from "next";

import { AppProviders } from "@/components/layout/app-providers";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.pageTitle,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.url,
    title: siteConfig.pageTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.pageTitle,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="min-h-dvh bg-background">
        <a href="#main-content" className="skip-link">
          Zum Inhalt springen
        </a>
        <AppProviders>
          <div className="flex min-h-dvh flex-col">{children}</div>
        </AppProviders>
      </body>
    </html>
  );
}
