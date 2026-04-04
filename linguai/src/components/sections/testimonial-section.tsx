import { Quote } from "lucide-react";

import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

export function TestimonialSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ backgroundColor: "var(--band-orange)" }}>
      <div
        className="pointer-events-none absolute inset-0 bg-grain-strong opacity-80 mix-blend-overlay"
        aria-hidden
      />
      <div className="container-site relative">
        <RevealOnScroll className="mx-auto max-w-3xl">
          <div className="relative rounded-2xl border border-white/25 bg-white p-8 shadow-2xl shadow-black/20 md:p-12">
            <Quote
              className="size-10 text-primary md:size-12"
              strokeWidth={1.25}
              aria-hidden
            />
            <blockquote className="mt-6 font-display text-2xl font-bold leading-snug tracking-tight text-foreground md:text-3xl">
              We finally stopped bouncing between translation tools and WPML. It
              feels like one product — one queue, one review loop, one publish.
            </blockquote>
            <div className="mt-8 flex items-center gap-4 border-t border-border/60 pt-8">
              <div
                className="size-14 shrink-0 rounded-full bg-gradient-to-br from-zinc-400 to-zinc-700 grayscale"
                aria-hidden
              />
              <div>
                <p className="font-display font-semibold text-foreground">
                  Head of Digital
                </p>
                <p className="text-sm text-muted-foreground">
                  B2B SaaS · multilingual launch
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
