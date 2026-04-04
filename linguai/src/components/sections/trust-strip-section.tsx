import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

const signals = [
  { label: "Compatible with WPML 4.x+" },
  { label: "Works with Gutenberg, Elementor & Divi" },
  { label: "60+ languages supported" },
  { label: "Review before every publish" },
  { label: "Designed for agencies & teams" },
] as const;

export function TrustStripSection() {
  return (
    <section className="border-b border-border/70 bg-white py-6">
      <div className="container-site">
        <RevealOnScroll>
          <div className="flex flex-wrap items-center justify-center gap-x-0 gap-y-0 divide-y divide-border/50 md:divide-y-0 md:divide-x md:flex-nowrap">
            {signals.map((signal) => (
              <div
                key={signal.label}
                className="flex w-full items-center justify-center gap-2 px-6 py-3 md:w-auto md:py-2"
              >
                <span
                  className="size-1.5 rounded-full bg-primary shrink-0"
                  aria-hidden
                />
                <span className="text-[0.8125rem] font-medium text-zinc-500 whitespace-nowrap">
                  {signal.label}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
