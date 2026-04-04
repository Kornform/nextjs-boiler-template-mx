import { X, Check } from "lucide-react";

import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

const oldWay = [
  "Export strings to spreadsheet or XLIFF file",
  "Brief a translator or send to a translation vendor",
  "Wait days — sometimes weeks — for turnaround",
  "Import back into WPML and fix formatting issues",
  "Review each language in a separate workflow",
  "Repeat every time your content changes",
] as const;

const newWay = [
  "Select content inside WPML — no export needed",
  "Generate AI translation drafts in minutes",
  "Review and refine in WPML's native editor",
  "Shared glossary keeps terminology consistent",
  "Batch jobs process multiple pages at once",
  "Same workflow handles every subsequent update",
] as const;

export function ComparisonSection() {
  return (
    <section className="section-muted py-20 md:py-28 lg:py-32">
      <div className="container-site">
        <RevealOnScroll className="mb-14 md:mb-16">
          <p className="text-label mb-5">Old vs. new</p>
          <h2 className="text-display max-w-2xl">
            Translating shouldn&apos;t be a bottleneck.
          </h2>
          <p className="text-body-muted mt-5 max-w-lg">
            Same WPML setup. Dramatically different pace. The workflow is the difference.
          </p>
        </RevealOnScroll>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {/* Old way */}
          <RevealOnScroll delayMs={0}>
            <div className="h-full rounded-2xl border border-border bg-muted/40 p-8 shadow-sm shadow-black/20 md:p-10">
              <div className="mb-7 flex items-center gap-3">
                <span className="rounded-full bg-muted px-3 py-1 font-display text-xs font-bold tracking-wide text-muted-foreground uppercase">
                  Manual workflow
                </span>
              </div>
              <ul className="space-y-4">
                {oldWay.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground"
                      aria-hidden
                    >
                      <X className="size-3 stroke-[2.5]" />
                    </span>
                    <span className="text-[0.9375rem] leading-snug text-muted-foreground">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-sm font-semibold text-muted-foreground">
                  Result: slow cycles, high coordination overhead, and a process that doesn&apos;t scale.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* New way */}
          <RevealOnScroll delayMs={90}>
            <div className="h-full rounded-2xl border-2 border-primary bg-card p-8 shadow-lg shadow-primary/15 md:p-10">
              <div className="mb-7 flex items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-display text-xs font-bold tracking-wide text-primary uppercase">
                  LinguAI for WPML
                </span>
              </div>
              <ul className="space-y-4">
                {newWay.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                      aria-hidden
                    >
                      <Check className="size-3 stroke-[2.5]" />
                    </span>
                    <span className="text-[0.9375rem] leading-snug font-medium text-foreground">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-primary/15 pt-6">
                <p className="text-sm font-semibold text-foreground/75">
                  Result: faster publishing, less manual overhead, a workflow that scales with your content.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
