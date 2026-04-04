import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

const stats = [
  { value: "10×", label: "faster bulk runs vs. manual handoff" },
  { value: "50+", label: "locales in a single WPML project" },
  { value: "24/7", label: "queue when your content team needs it" },
] as const;

export function StatsSection() {
  return (
    <section className="section-muted border-y border-border/60 py-16 md:py-20">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {stats.map((s, i) => (
            <RevealOnScroll key={s.label} delayMs={i * 70}>
              <div className="text-center md:text-left">
                <p className="font-display text-5xl font-extrabold tracking-tighter text-foreground md:text-6xl">
                  {s.value}
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground md:mx-0 md:max-w-none">
                  {s.label}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delayMs={200} className="mt-14 border-t border-border/60 pt-10">
          <p className="text-center text-[0.65rem] font-semibold tracking-[0.35em] text-muted-foreground/80 uppercase">
            Trusted by teams shipping in WordPress · Woo · SaaS
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40 grayscale">
            {["Samsung", "Visa", "Sony", "Adobe", "Spotify"].map((name) => (
              <span
                key={name}
                className="font-display text-lg font-bold tracking-tight"
              >
                {name}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
