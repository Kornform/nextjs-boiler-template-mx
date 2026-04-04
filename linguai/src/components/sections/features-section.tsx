import { Brain, Search, Shield } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { cn } from "@/lib/utils";

const items = [
  {
    icon: Brain,
    title: "Context-Aware AI",
    description:
      "It doesn't just translate words; it understands the context of your niche to maintain your brand's unique tone.",
  },
  {
    icon: Shield,
    title: "Builder Safe",
    description:
      "Safely ignores WordPress shortcodes and page builder tags (Elementor, Divi) so your layouts never break.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description:
      "Automatically translates permalinks, alt tags, and Yoast metadata so you rank natively in every language.",
  },
] as const;

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="section-sm scroll-mt-24 border-y border-border/50 bg-white"
    >
      <div className="container-site">
        <RevealOnScroll className="text-center">
          <h2 className="text-h2 mb-4 text-foreground">Built for performance.</h2>
          <p className="text-body-muted mx-auto mb-14 max-w-2xl">
            Everything you need to launch a multilingual WordPress site without
            breaking your layouts or your budget.
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 text-left md:grid-cols-3 md:gap-7">
          {items.map((item, i) => (
            <RevealOnScroll key={item.title} delayMs={i * 70}>
              <Card
                className={cn(
                  "group h-full rounded-2xl border-border/70 bg-card/90 p-0 shadow-sm ring-1 ring-border/40",
                  "transition-[transform,box-shadow] duration-300",
                  "hover:-translate-y-1 hover:shadow-[0_22px_48px_-28px_rgba(12,18,34,0.28)]"
                )}
              >
                <CardHeader className="space-y-5 p-8">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary/15">
                    <item.icon
                      className="size-6"
                      strokeWidth={1.65}
                      aria-hidden
                    />
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="font-display text-xl font-bold text-foreground">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
