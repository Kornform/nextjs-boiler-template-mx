import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer
      className="relative mt-auto overflow-hidden pt-20 pb-0 text-center"
      style={{ backgroundColor: "var(--footer-bg)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grain-strong opacity-50"
        aria-hidden
      />

      <div className="container-site relative max-w-3xl px-6 pb-16">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-[2.25rem] md:leading-[1.1]">
          Ready to take your site global?
        </h2>
        <p className="mt-6 text-lg text-zinc-500">{siteConfig.tagline}</p>
        <Link
          href={siteConfig.cta.footer.href}
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-10 rounded-full px-10 shadow-lg shadow-black/40"
          )}
        >
          {siteConfig.cta.footer.label}
        </Link>
        <p className="mt-6 text-sm text-zinc-600">No credit card required.</p>

        <nav
          className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-2 border-t border-white/10 pt-10"
          aria-label="Footer"
        >
          {siteConfig.footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-500 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Oversized wordmark — graphic footer (Designity-style) */}
      <div className="relative overflow-hidden border-t border-white/[0.08] py-6 md:py-10">
        <p
          className="font-display text-[clamp(2.75rem,14vw,10rem)] font-extrabold leading-[0.85] tracking-[-0.06em] text-white/[0.06] select-none whitespace-nowrap"
          aria-hidden
        >
          {siteConfig.name} · {siteConfig.name} · {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
