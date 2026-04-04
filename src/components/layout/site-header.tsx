"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b border-border transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled
          ? "bg-background/95 shadow-md shadow-black/20 backdrop-blur-md"
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container-site flex min-h-18 items-center justify-between gap-4 py-4 md:min-h-20">
        <Link
          href="/"
          className="link-focus-ring font-display text-2xl font-bold tracking-tight text-foreground md:text-[1.65rem]"
        >
          {siteConfig.brand.prefix}
          <span className="text-primary">{siteConfig.brand.suffix}</span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={siteConfig.cta.nav.href}
          className={cn(
            buttonVariants({ size: "default" }),
            "shrink-0 rounded-full px-5 shadow-none"
          )}
        >
          {siteConfig.cta.nav.label}
        </Link>
      </div>

      <nav
        className={cn(
          "flex border-t border-border px-4 pb-3 pt-2 md:hidden",
          scrolled && "bg-background/95"
        )}
        aria-label="Primary mobile"
      >
        <div className="flex max-w-full gap-4 overflow-x-auto">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-focus-ring shrink-0 whitespace-nowrap rounded-md text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
