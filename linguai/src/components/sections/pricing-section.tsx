import Link from "next/link";
import { Check } from "lucide-react";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Creator",
    subtitle: "Perfect for single site owners.",
    price: "$19",
    period: "/mo",
    features: [
      "1 WordPress Install",
      "5 Million AI Characters/mo",
      "Full WPML Integration",
      "Standard Email Support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Agency",
    subtitle: "For freelancers & developers.",
    price: "$49",
    period: "/mo",
    features: [
      "Up to 10 WordPress Installs",
      "Unlimited AI Characters",
      "Advanced Glossary Features",
      "Priority 24/7 Support",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
] as const;

export function PricingSection() {
  return (
    <section id="pricing" className="section-sm scroll-mt-24 bg-background">
      <div className="container-site">
        <RevealOnScroll className="text-center">
          <h2 className="text-h2 mb-3 text-foreground">
            Simple pricing. No hidden fees.
          </h2>
          <p className="text-body-muted mx-auto mb-12 max-w-lg">
            One predictable bill. Scale when your installs and languages do.
          </p>
        </RevealOnScroll>

        <div className="content-pricing grid gap-8 text-left md:grid-cols-2">
          {tiers.map((tier, i) => (
            <RevealOnScroll key={tier.name} delayMs={i * 80}>
              <Card
                className={cn(
                  "relative flex flex-col overflow-hidden rounded-2xl border-2 bg-card p-0",
                  "transition-[transform,box-shadow] duration-300",
                  tier.highlighted
                    ? "z-[1] border-primary shadow-[0_28px_60px_-32px_rgb(255_77_18_/_0.45)] md:scale-[1.02]"
                    : "border-border/80 hover:border-border"
                )}
              >
                {tier.highlighted ? (
                  <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-xl bg-primary px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-primary-foreground">
                    Most Popular
                  </div>
                ) : null}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/10 to-transparent",
                    !tier.highlighted && "opacity-40"
                  )}
                  aria-hidden
                />
                <CardHeader className="relative space-y-2 px-10 pb-2 pt-10">
                  <CardTitle className="font-display text-2xl font-bold text-foreground">
                    {tier.name}
                  </CardTitle>
                  <p className="text-muted-foreground">{tier.subtitle}</p>
                  <div className="pt-4">
                    <span className="font-display text-4xl font-bold tracking-tight text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-lg font-normal text-muted-foreground">
                      {tier.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="relative flex-1 px-10 pb-8 pt-4">
                  <ul className="space-y-4 text-muted-foreground">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Check className="size-3 stroke-[3]" aria-hidden />
                        </span>
                        <span className="text-[0.9375rem] leading-relaxed">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="border-0 bg-transparent px-10 pb-10 pt-0 shadow-none">
                  <Link
                    href={siteConfig.cta.primary.href}
                    className={cn(
                      buttonVariants({
                        variant: tier.highlighted ? "default" : "secondary",
                        className: "h-12 w-full text-base font-semibold",
                      }),
                      tier.highlighted && "shadow-md shadow-orange-950/25"
                    )}
                  >
                    {tier.cta}
                  </Link>
                </CardFooter>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
