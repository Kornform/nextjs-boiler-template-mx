import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock3, Globe2 } from "lucide-react";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const languages = [
  {
    code: "DE",
    name: "German",
    barWidth: "88%",
    status: "Generating…",
    statusColor: "text-amber-400",
    barDelay: "0.6s",
  },
  {
    code: "FR",
    name: "French",
    barWidth: "100%",
    status: "Ready to review",
    statusColor: "text-emerald-400",
    barDelay: "0.75s",
  },
  {
    code: "NL",
    name: "Dutch",
    barWidth: "14%",
    status: "Queued",
    statusColor: "text-white/35",
    barDelay: "0.9s",
  },
] as const;

const queueItems = [
  { label: "Product catalog · 42 strings", time: "Up next" },
  { label: "Blog SEO meta · 18 strings", time: "Queued" },
] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-void text-white">
      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-grain-strong opacity-90"
        aria-hidden
      />
      {/* Subtle orange glow */}
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]"
        aria-hidden
      />
      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent"
        aria-hidden
      />

      <div className="container-site relative grid min-h-[min(92vh,880px)] grid-cols-1 items-center gap-14 pb-20 pt-28 md:pb-24 md:pt-32 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-36">
        {/* Left: Copy */}
        <div className="z-10 lg:col-span-6">
          <p
            className={cn(
              "text-label-on-dark mb-6 md:mb-8 flex items-center gap-2",
              "animate-hero-up hero-delay-1"
            )}
          >
            <Globe2 className="size-3.5 text-primary" aria-hidden />
            {siteConfig.heroEyebrow}
          </p>

          <h1
            className={cn("text-display-hero", "animate-hero-up hero-delay-2")}
          >
            {siteConfig.heroTitle}
          </h1>

          <p
            className={cn(
              "mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-white/55 md:mt-10",
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
                "h-14 min-w-[200px] rounded-full px-10 text-[0.9375rem] font-semibold shadow-lg shadow-primary/35"
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
                }),
                "h-14 rounded-full border-white/20 bg-transparent px-10 text-[0.9375rem] font-semibold text-white hover:bg-white/10 hover:text-white"
              )}
            >
              {siteConfig.cta.secondary.label}
              <ArrowUpRight className="size-4 opacity-70" data-icon="inline-end" />
            </Link>
          </div>

          <div
            className={cn(
              "mt-10 flex flex-wrap items-center gap-x-7 gap-y-2 text-sm text-white/40",
              "animate-hero-up hero-delay-5"
            )}
          >
            <span className="flex items-center gap-1.5">
              <span className="text-primary">★★★★★</span>
              {siteConfig.heroRating}
            </span>
            <span className="hidden h-3.5 w-px bg-white/15 sm:block" aria-hidden />
            <span>No credit card required</span>
            <span className="hidden h-3.5 w-px bg-white/15 sm:block" aria-hidden />
            <span>14-day free trial</span>
          </div>
        </div>

        {/* Right: Translation run widget */}
        <div
          className={cn(
            "relative z-10 lg:col-span-6",
            "animate-hero-up hero-delay-3"
          )}
        >
          <div className="surface-raised overflow-hidden rounded-2xl border border-white/10">
            {/* Widget header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span
                  className="size-2 rounded-full bg-emerald-400 animate-pulse-dot"
                  aria-hidden
                />
                <span className="font-display text-[0.8125rem] font-semibold text-white/80">
                  Translation run active
                </span>
              </div>
              <span className="rounded-full bg-white/8 px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-wide text-white/40 uppercase">
                Live
              </span>
            </div>

            {/* Active job */}
            <div className="border-b border-white/10 px-5 py-4">
              <p className="text-[0.7rem] font-semibold tracking-widest text-white/35 uppercase mb-1">
                Active job
              </p>
              <p className="font-display text-sm font-semibold text-white/90">
                Homepage refresh · EN source → 3 languages
              </p>
              <p className="mt-0.5 text-xs text-white/35 flex items-center gap-1.5">
                <Clock3 className="size-3" aria-hidden />
                847 strings · 12 min elapsed
              </p>
            </div>

            {/* Language rows */}
            <div className="divide-y divide-white/[0.07] px-5">
              {languages.map((lang) => (
                <div key={lang.code} className="py-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="rounded bg-white/10 px-1.5 py-0.5 font-display text-[0.65rem] font-bold tracking-wider text-white/70 uppercase">
                        {lang.code}
                      </span>
                      <span className="text-xs text-white/50">{lang.name}</span>
                    </div>
                    <span className={cn("text-xs font-medium", lang.statusColor)}>
                      {lang.status}
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={
                        {
                          width: lang.barWidth,
                          "--bar-w": lang.barWidth,
                          animationDelay: lang.barDelay,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Queue preview */}
            <div className="border-t border-white/10 bg-white/[0.03] px-5 py-4">
              <p className="text-[0.65rem] font-semibold tracking-widest text-white/30 uppercase mb-3">
                Up next in queue
              </p>
              <div className="space-y-2">
                {queueItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-xs text-white/45">{item.label}</span>
                    <span className="text-[0.65rem] font-medium text-white/25 uppercase tracking-wide">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative badge */}
          <div className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded-full border border-white/15 bg-[#111]/80 px-3.5 py-2 shadow-xl backdrop-blur-sm">
            <CheckCircle2 className="size-3.5 text-emerald-400" aria-hidden />
            <span className="text-xs font-semibold text-white/70">
              Review before every publish
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
