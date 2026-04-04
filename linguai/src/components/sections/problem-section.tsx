import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { cn } from "@/lib/utils";

const painPoints = [
  {
    num: "01",
    title: "Every content update triggers another translation cycle.",
    body: "When your primary content changes, the workflow restarts. Every page edit, every new post, every product update requires a manual handoff. At scale, this compounds into a significant operational cost.",
  },
  {
    num: "02",
    title: "Publishing cycles slow down as the site grows.",
    body: "More languages, more content types, more coordination. What takes one day with one language takes a week with four — because manual processes don't scale linearly. Teams hit a ceiling.",
  },
  {
    num: "03",
    title: "Translation quality becomes inconsistent without structure.",
    body: "Different translators, different context, no shared glossary. Output quality varies by project, by vendor, by week. Review queues grow. Editing overhead rises. The inconsistency is systemic.",
  },
  {
    num: "04",
    title: "Agencies can't build repeatable multilingual workflows.",
    body: "Each multilingual engagement starts from scratch — different tools, different processes, no consistent workflow template. Expertise doesn't compound. Every project is a custom effort.",
  },
] as const;

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32" style={{ backgroundColor: "var(--deep, #111112)" }}>
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 bg-grain-strong opacity-70"
        aria-hidden
      />

      <div className="container-site relative">
        {/* Intro */}
        <RevealOnScroll className="mb-16 md:mb-20">
          <p className="text-label-on-dark mb-5">The problem</p>
          <h2
            className="text-display-on-dark max-w-3xl"
          >
            Manual translation adds friction at every step.
          </h2>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-white/45">
            These aren&apos;t edge cases. They&apos;re the standard experience for teams managing multilingual WordPress sites without a structured workflow.
          </p>
        </RevealOnScroll>

        {/* Pain points grid */}
        <div className="grid gap-px grid-cols-1 md:grid-cols-2 overflow-hidden rounded-xl border border-white/[0.08]">
          {painPoints.map((point, i) => (
            <RevealOnScroll
              key={point.num}
              delayMs={i * 80}
            >
              <div
                className={cn(
                  "relative overflow-hidden p-8 md:p-10",
                  "bg-white/[0.03] hover:bg-white/[0.055] transition-colors duration-300",
                  i < 2 ? "md:border-b md:border-white/[0.08]" : "",
                  i % 2 === 0 ? "md:border-r md:border-white/[0.08]" : ""
                )}
              >
                {/* Decorative background number */}
                <span
                  className="pointer-events-none absolute -right-3 -top-4 select-none font-display font-extrabold leading-none tracking-[-0.06em] text-white/[0.035]"
                  style={{ fontSize: "clamp(5rem, 12vw, 9rem)" }}
                  aria-hidden
                >
                  {point.num}
                </span>

                {/* Content */}
                <p className="font-display text-[0.65rem] font-bold tracking-[0.25em] text-primary uppercase mb-4">
                  {point.num}
                </p>
                <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-white md:text-xl mb-4">
                  {point.title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-white/45">
                  {point.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
