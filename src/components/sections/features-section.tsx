import { Zap, SlidersHorizontal, RefreshCw, BookOpen, Layers } from "lucide-react";

import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Zap,
    title: "Faster publishing cycles",
    description:
      "Generate initial translation drafts faster than manual briefing or vendor turnaround. Content updates move from writing to multilingual publishing in a fraction of the time.",
  },
  {
    icon: SlidersHorizontal,
    title: "Less repetitive translation work",
    description:
      "Reduce the manual effort of re-translating recurring content, repetitive page structures, and standard UI strings. The workflow handles the routine work so your team can focus on quality.",
  },
  {
    icon: BookOpen,
    title: "Shared glossary and context",
    description:
      "Maintain consistent terminology across your entire site. Define key terms and brand language once — the glossary is applied automatically across all translation runs.",
  },
  {
    icon: SlidersHorizontal,
    title: "Full editorial review control",
    description:
      "Every translation is a draft until you approve it. Review and edit in WPML's native translation editor. Nothing goes live without your sign-off. Automation assists — it doesn't replace judgment.",
  },
  {
    icon: Layers,
    title: "Native WPML integration",
    description:
      "LinguAI maps directly to your WPML language structure, translation workflows, and string types. No external platforms. No rebuilding your setup. It fits the process you already have.",
  },
  {
    icon: RefreshCw,
    title: "Scales with your content volume",
    description:
      "Whether you're managing one multilingual site or twenty, the workflow scales without proportionally scaling the effort. Batch translation handles large content sets efficiently.",
  },
] as const;

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="scroll-mt-24 border-y border-border bg-background py-20 md:py-28 lg:py-32"
    >
      <div className="container-site">
        <RevealOnScroll className="mb-14 md:mb-16">
          <p className="text-label mb-5">Benefits</p>
          <h2 className="text-display max-w-2xl">
            Concrete reasons to make the switch.
          </h2>
          <p className="text-body-muted mt-5 max-w-xl">
            Not feature labels — actual workflow improvements that reduce effort and increase publishing speed.
          </p>
        </RevealOnScroll>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {benefits.map((item, i) => (
            <RevealOnScroll key={item.title} delayMs={i * 60}>
              <div
                className={cn(
                  "group h-full rounded-xl border border-border bg-card p-7 shadow-sm shadow-black/15",
                  "transition-[border-color,box-shadow] duration-300 ease-out",
                  "hover:border-primary/35 hover:shadow-md hover:shadow-black/20"
                )}
              >
                <div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-primary/8 text-primary ring-1 ring-primary/15 transition-colors group-hover:bg-primary/12">
                  <item.icon className="size-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2.5">
                  {item.title}
                </h3>
                <p className="text-[0.875rem] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
