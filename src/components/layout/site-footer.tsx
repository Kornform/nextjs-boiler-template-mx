import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="container-site py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                {siteConfig.name}
              </span>
              <span className="mx-1.5 text-border" aria-hidden>
                ·
              </span>
              <time dateTime={String(new Date().getFullYear())}>
                © {new Date().getFullYear()}
              </time>
            </p>
            <p className="mt-1 text-xs text-muted-foreground/80">
              Next.js App Router · static export ready
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-1 gap-y-2 text-sm text-muted-foreground"
          >
            {siteConfig.footerLinks.map((item, i) => (
              <span key={item.href + item.label} className="contents">
                {i > 0 ? (
                  <span className="px-2 text-border select-none" aria-hidden>
                    |
                  </span>
                ) : null}
                <Link
                  href={item.href}
                  className={cn(
                    "link-focus-ring rounded-sm transition-colors hover:text-foreground",
                    item.external && "inline-flex items-center gap-1"
                  )}
                  {...(item.external
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                >
                  {item.label}
                  {item.external ? (
                    <span className="sr-only"> (neuer Tab)</span>
                  ) : null}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
