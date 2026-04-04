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
        "fixed top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-border bg-white/95 shadow-sm shadow-black/5 backdrop-blur-md"
          : "border-b border-white/10 bg-transparent"
      )}
    >
      <div className="container-site flex min-h-18 items-center justify-between gap-4 py-4 md:min-h-20">
        <Link
          href="/"
          className={cn(
            "font-display text-2xl font-bold tracking-tight md:text-[1.65rem]",
            scrolled ? "text-foreground" : "text-white"
          )}
        >
          {siteConfig.brand.prefix}
          <span className="text-primary">{siteConfig.brand.suffix}</span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={scrolled ? "nav-link" : "nav-link-on-dark"}
            >
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
          "flex px-4 pb-3 pt-2 md:hidden",
          scrolled ? "border-t border-border/60" : "border-t border-white/10"
        )}
        aria-label="Primary mobile"
      >
        <div className="flex max-w-full gap-4 overflow-x-auto">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "shrink-0 whitespace-nowrap text-sm font-medium",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/70 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
