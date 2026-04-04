import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { cn } from "@/lib/utils";

const steps = [
  {
    num: "01",
    label: "Step 1",
    title: "Install and connect to your WPML setup.",
    body: "Install LinguAI for WPML from the WordPress plugin repository. Configure your AI settings once. The plugin maps directly to your existing WPML language structure — no rebuilding your setup, no external platforms to configure.",
    detail: "Works with existing WPML installations",
  },
  {
    num: "02",
    label: "Step 2",
    title: "Select content and generate translations.",
    body: "Choose what to translate — a single page, a batch of posts, a product catalog. Run AI translation directly from your WordPress admin. Initial drafts generate faster than any manual handoff cycle.",
    detail: "Batch or per-page — your choice",
  },
  {
    num: "03",
    label: "Step 3",
    title: "Review, refine, and publish.",
    body: "Open translations in WPML's standard translation editor. Review the draft, refine where needed, apply glossary corrections. Publish only when you're satisfied. Editorial control stays with your team at every stage.",
    detail: "Nothing goes live without your approval",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 overflow-hidden py-20 md:py-28 lg:py-32"
      style={{ backgroundColor: "var(--void)" }}
    >
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 bg-grain-strong opacity-60"
        aria-hidden
      />
      {/* Subtle glow bottom-left */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 size-[500px] rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />

      <div className="container-site relative">
        {/* Header */}
        <RevealOnScroll className="mb-16 md:mb-20">
          <p className="text-label-on-dark mb-5">How it works</p>
          <h2 className="text-display-on-dark max-w-2xl">
            Three steps to a faster multilingual workflow.
          </h2>
          <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-white/45">
            Designed to feel like a natural extension of your existing process — not a new tool that needs to be learned from scratch.
          </p>
        </RevealOnScroll>

        {/* Steps */}
        <div className="grid gap-0 md:grid-cols-3 md:gap-px overflow-hidden rounded-xl border border-white/[0.07]">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.num} delayMs={i * 100}>
              <div
                className={cn(
                  "relative overflow-hidden p-8 md:p-10",
                  "bg-white/[0.025] hover:bg-white/[0.045] transition-colors duration-300",
                  i < 2 ? "md:border-r md:border-white/[0.07]" : "",
                  "border-b border-white/[0.07] md:border-b-0 last:border-b-0"
                )}
              >
                {/* Background step number */}
                <span
                  className="pointer-events-none absolute -bottom-6 -right-4 select-none font-display font-extrabold leading-none tracking-[-0.06em] text-white/[0.03]"
                  style={{ fontSize: "clamp(6rem, 14vw, 11rem)" }}
                  aria-hidden
                >
                  {step.num}
                </span>

                {/* Orange step label */}
                <p className="font-display text-[0.65rem] font-bold tracking-[0.25em] text-primary uppercase mb-5">
                  {step.label}
                </p>

                <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-white mb-4 md:text-[1.3125rem]">
                  {step.title}
                </h3>

                <p className="text-[0.9375rem] leading-relaxed text-white/45 mb-6">
                  {step.body}
                </p>

                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                  <span className="text-xs font-medium text-white/35">
                    {step.detail}
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
