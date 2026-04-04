import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

const pillars = [
  {
    num: "—",
    title: "Faster first drafts.",
    body: "Generate AI translation drafts in a fraction of the time it takes to brief a translator or wait for a vendor. The initial cycle is faster — and every subsequent update is too.",
  },
  {
    num: "—",
    title: "Built into your WPML workflow.",
    body: "LinguAI works inside your existing WordPress and WPML setup. No new tools to learn, no external platforms to manage. It fits the process you already have.",
  },
  {
    num: "—",
    title: "Review stays with you.",
    body: "AI generates the draft. You decide what goes live. Review and edit in WPML's standard translation editor before publishing. Automation helps — it doesn't override editorial judgment.",
  },
] as const;

export function SolutionSection() {
  return (
    <section className="border-y border-border bg-background py-20 md:py-28 lg:py-32">
      <div className="container-site">
        <RevealOnScroll className="mb-16 max-w-3xl md:mb-20">
          <p className="text-label mb-5">The solution</p>
          <h2 className="text-display mb-6">
            One workflow. More languages. Less effort.
          </h2>
          <p className="text-body-muted max-w-xl">
            Manual translation treats every update as a new project. LinguAI for WPML treats it as a continuation of your workflow — faster on each repetition, consistent in structure, and always under your editorial control.
          </p>
        </RevealOnScroll>

        {/* Pillars */}
        <div className="grid gap-10 border-t border-border pt-12 md:grid-cols-3 md:gap-8 md:pt-14">
          {pillars.map((pillar, i) => (
            <RevealOnScroll key={pillar.title} delayMs={i * 90}>
              <div className="group">
                <div className="mb-5 h-px w-10 bg-primary transition-all duration-300 group-hover:w-16" />
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
