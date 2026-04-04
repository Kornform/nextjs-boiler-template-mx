import Link from "next/link";
import { ArrowUpRight, Globe2 } from "lucide-react";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const queueItems = [
  {
    title: "Product catalog · DE → NL",
    meta: "Batch · 42 strings",
    thumb: "from-zinc-600 to-zinc-800",
  },
  {
    title: "Blog · SEO titles & meta",
    meta: "In review",
    thumb: "from-zinc-500 to-zinc-700",
  },
  {
    title: "Checkout · UI strings",
    meta: "Queued",
    thumb: "from-zinc-700 to-zinc-900",
  },
] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-void text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-grain-strong opacity-90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-0 size-[min(520px,50vw)] rounded-full bg-primary/25 blur-[100px]"
        aria-hidden
      />

      <div className="container-site relative grid min-h-[min(92vh,880px)] grid-cols-1 items-center gap-14 pb-20 pt-28 md:pb-24 md:pt-32 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-36">
        <div className="z-10 lg:col-span-6">
          <p
            className={cn(
              "text-label-on-dark mb-6 md:mb-8",
              "animate-hero-up hero-delay-1"
            )}
          >
            {siteConfig.heroEyebrow}
          </p>

          <h1
            className={cn(
              "text-display-hero",
              "animate-hero-up hero-delay-2"
            )}
          >
            {siteConfig.heroTitle}
          </h1>

          <p
            className={cn(
              "mt-8 max-w-xl text-lg leading-relaxed text-white/55 md:mt-10",
              "animate-hero-up hero-delay-3"
            )}
          >
            {siteConfig.description}
          </p>

          <div
            className={cn(
              "mt-10 flex flex-col gap-4 sm:flex-row sm:items-center",
              "animate-hero-up hero-delay-4"
            )}
          >
            <Link
              href={siteConfig.cta.primary.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 min-w-[200px] rounded-full px-10 text-base font-semibold shadow-lg shadow-primary/35"
              )}
            >
              {siteConfig.cta.primary.label}
            </Link>
            <Link
              href={siteConfig.cta.secondary.href}
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "h-14 rounded-full border-white/25 bg-transparent px-10 text-base font-semibold text-white hover:bg-white/10 hover:text-white",
                })
              )}
            >
              {siteConfig.cta.secondary.label}
              <ArrowUpRight className="size-4 opacity-80" data-icon="inline-end" />
            </Link>
          </div>

          <div
            className={cn(
              "mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-white/45",
              "animate-hero-up hero-delay-5"
            )}
          >
            <span className="flex items-center gap-2">
              <span className="text-lg text-primary" aria-hidden>
                ★★★★★
              </span>
              {siteConfig.heroRating}
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden />
            <span className="flex items-center gap-2">
              <Globe2 className="size-4 text-primary" aria-hidden />
              WPML-native workflow
            </span>
          </div>
        </div>

        <div className="relative z-10 lg:col-span-6">
          <div className="mb-4 flex items-center justify-between px-1">
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              Translation queue
            </p>
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[0.65rem] font-semibold text-primary uppercase">
              Live
            </span>
          </div>
          <div className="surface-raised divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
            {queueItems.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 px-4 py-4 transition-colors hover:bg-white/[0.04] md:px-5 md:py-5"
              >
                <div
                  className={cn(
                    "size-14 shrink-0 rounded-lg bg-gradient-to-br grayscale",
                    item.thumb
                  )}
                  aria-hidden
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-display text-sm font-semibold text-white md:text-base">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs text-white/45">{item.meta}</p>
                </div>
                <ArrowUpRight className="size-4 shrink-0 text-white/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
