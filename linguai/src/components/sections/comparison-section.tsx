import { X } from "lucide-react";

import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { cn } from "@/lib/utils";

const oldWay = [
  "Exporting and importing endless XLIFF files.",
  "Waiting days or weeks for manual translations.",
  "High per-word costs that drain your budget.",
] as const;

const newWay = [
  "One-click bulk translations directly inside WordPress.",
  "Entire sites translated in minutes, not weeks.",
  "Fixed, predictable pricing that scales with you.",
] as const;

export function ComparisonSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div
        className="pointer-events-none absolute -left-32 top-24 size-[28rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div className="container-site relative">
        <RevealOnScroll className="mx-auto mb-14 max-w-3xl text-center md:mx-0 md:text-left">
          <h2 className="text-h2 mb-4 text-balance text-foreground">
            Translating shouldn&apos;t be a bottleneck.
          </h2>
          <p className="text-body-muted mx-auto max-w-xl md:mx-0">
            Same WPML setup — a different pace. Pick the path that matches how you
            ship.
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-2 md:items-start md:gap-8 lg:gap-10">
          <RevealOnScroll delayMs={0}>
            <div
              className={cn(
                "rounded-2xl border border-border/80 bg-stone-100/90 p-9 md:mt-10 md:p-10",
                "shadow-[inset_0_1px_0_rgb(255_255_255_/_0.6)]"
              )}
            >
              <h3 className="font-display mb-6 text-xl font-bold text-muted-foreground">
                The Old Way
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                {oldWay.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-600"
                      aria-hidden
                    >
                      <X className="size-3.5 stroke-[3]" />
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={90}>
            <div className="surface-brand relative p-9 md:-translate-y-2 md:p-10 lg:-translate-y-4">
              <div
                className="absolute -left-1 top-8 hidden h-24 w-1 rounded-full bg-primary md:block"
                aria-hidden
              />
              <h3 className="font-display mb-6 text-xl font-bold text-primary">
                The WPML AI Way
              </h3>
              <ul className="space-y-4 font-medium text-foreground">
                {newWay.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="text-lg text-primary" aria-hidden>
                      ✓
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
