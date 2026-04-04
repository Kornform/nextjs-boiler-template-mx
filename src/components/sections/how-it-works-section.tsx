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
      className="relative scroll-mt-24 overflow-hidden border-y border-border bg-muted/30 py-20 text-foreground md:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grain opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 size-[500px] rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />

      <div className="container-site relative">
        <RevealOnScroll className="mb-16 md:mb-20">
          <p className="text-label mb-5">How it works</p>
          <h2 className="text-display max-w-2xl">
            Three steps to a faster multilingual workflow.
          </h2>
          <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-muted-foreground">
            Designed to feel like a natural extension of your existing process — not a new tool that needs to be learned from scratch.
          </p>
        </RevealOnScroll>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.num} delayMs={i * 100}>
              <div
                className={cn(
                  "relative h-full overflow-hidden rounded-xl border border-border bg-card p-8 shadow-sm shadow-black/25 transition-[border-color,box-shadow] duration-300 md:p-10",
                  "hover:border-primary/40 hover:shadow-md hover:shadow-black/30"
                )}
              >
                <span
                  className="pointer-events-none absolute -bottom-6 -right-4 select-none font-display font-extrabold leading-none tracking-[-0.06em] text-muted-foreground/10"
                  style={{ fontSize: "clamp(6rem, 14vw, 11rem)" }}
                  aria-hidden
                >
                  {step.num}
                </span>

                <p className="font-display mb-5 text-[0.65rem] font-bold tracking-[0.25em] text-primary uppercase">
                  {step.label}
                </p>

                <h3 className="font-display mb-4 text-xl font-bold leading-snug tracking-tight text-foreground md:text-[1.3125rem]">
                  {step.title}
                </h3>

                <p className="mb-6 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {step.body}
                </p>

                <div className="flex items-center gap-2">
                  <span
                    className="size-1.5 rounded-full bg-primary/80"
                    aria-hidden
                  />
                  <span className="text-xs font-medium text-muted-foreground">
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
