/**
 * HeroSection — example marketing section.
 * Replace the copy via src/config/site.ts (heroEyebrow, heroTitle,
 * heroRating, description) or edit the right-column widget below
 * to match your product's key visual.
 */
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, BarChart3, Layers } from "lucide-react";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const previewItems = [
  { label: "Feature one", progress: "88%", status: "In progress", statusColor: "text-amber-400", barDelay: "0.6s" },
  { label: "Feature two", progress: "100%", status: "Complete",   statusColor: "text-emerald-400", barDelay: "0.75s" },
  { label: "Feature three", progress: "14%", status: "Queued",    statusColor: "text-muted-foreground", barDelay: "0.9s" },
] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-grain-strong opacity-90" aria-hidden />
      <div className="pointer-events-none absolute -right-32 top-0 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-card/80 to-transparent" aria-hidden />

      <div className="container-site relative grid min-h-[min(92vh,880px)] grid-cols-1 items-center gap-14 pb-20 pt-28 md:pb-24 md:pt-32 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-36">

        {/* Left: Copy */}
        <div className="z-10 lg:col-span-6">
          <p className={cn("text-label mb-6 md:mb-8", "animate-hero-up hero-delay-1")}>
            {siteConfig.heroEyebrow}
          </p>
          <h1 className={cn("text-display-hero", "animate-hero-up hero-delay-2")}>
            {siteConfig.heroTitle}
          </h1>
          <p className={cn("mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground md:mt-10", "animate-hero-up hero-delay-3")}>
            {siteConfig.description}
          </p>

          <div className={cn("mt-10 flex flex-col gap-4 sm:flex-row sm:items-center", "animate-hero-up hero-delay-4")}>
            <Link
              href={siteConfig.cta.primary.href}
              className={cn(buttonVariants({ size: "lg" }), "h-14 min-w-[200px] rounded-full px-10 text-[0.9375rem] font-semibold shadow-lg shadow-black/20")}
            >
              {siteConfig.cta.primary.label}
            </Link>
            <Link
              href={siteConfig.cta.secondary.href}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-14 rounded-full border-border bg-transparent px-10 text-[0.9375rem] font-semibold text-foreground hover:bg-muted")}
            >
              {siteConfig.cta.secondary.label}
              <ArrowUpRight className="size-4 opacity-70" data-icon="inline-end" />
            </Link>
          </div>

          <div className={cn("mt-10 flex flex-wrap items-center gap-x-7 gap-y-2 text-sm text-muted-foreground", "animate-hero-up hero-delay-5")}>
            <span>{siteConfig.heroRating}</span>
            <span className="hidden h-3.5 w-px bg-border sm:block" aria-hidden />
            <span>No credit card required</span>
            <span className="hidden h-3.5 w-px bg-border sm:block" aria-hidden />
            <span>Free to use</span>
          </div>
        </div>

        {/* Right: product preview widget — replace with your key visual */}
        <div className={cn("relative z-10 lg:col-span-6", "animate-hero-up hero-delay-3")}>
          <div className="overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-xl">

            {/* Widget header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div className="flex items-center gap-2.5">
                <Layers className="size-4 text-primary" aria-hidden />
                <span className="font-display text-[0.8125rem] font-semibold text-foreground">
                  Your product name
                </span>
              </div>
              <span className="rounded-full bg-muted px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-wide text-muted-foreground uppercase">
                Live
              </span>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
              {[
                { label: "Metric A", value: "1,284" },
                { label: "Metric B", value: "98.2%" },
                { label: "Metric C", value: "+34%" },
              ].map((stat) => (
                <div key={stat.label} className="px-4 py-4">
                  <p className="text-[0.65rem] font-semibold tracking-widest text-muted-foreground uppercase">{stat.label}</p>
                  <p className="mt-0.5 font-display text-lg font-bold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Progress rows */}
            <div className="divide-y divide-border px-5">
              {previewItems.map((item) => (
                <div key={item.label} className="py-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <BarChart3 className="size-3 text-muted-foreground" aria-hidden />
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                    </div>
                    <span className={cn("text-xs font-medium", item.statusColor)}>
                      {item.status}
                    </span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary animate-bar-grow"
                      style={{ "--bar-w": item.progress, animationDelay: item.barDelay } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border bg-muted/30 px-5 py-4">
              <p className="text-xs text-muted-foreground">
                Replace this widget with your product&apos;s key visual.
              </p>
            </div>
          </div>

          {/* Decorative badge */}
          <div className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded-full border border-border bg-card/95 px-3.5 py-2 shadow-lg backdrop-blur-sm">
            <CheckCircle2 className="size-3.5 text-emerald-500" aria-hidden />
            <span className="text-xs font-semibold text-muted-foreground">
              Replace with your tagline
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
