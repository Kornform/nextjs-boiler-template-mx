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
    name: "Professional",
    subtitle: "For site owners and small teams managing one multilingual site.",
    price: "$19",
    period: "/month",
    note: "billed annually · or $25 month-to-month",
    features: [
      "1 WordPress installation",
      "Unlimited translation runs",
      "All WPML content types supported",
      "Glossary & context settings",
      "Standard email support",
    ],
    highlighted: false,
    cta: "Start Free Trial",
  },
  {
    name: "Agency",
    subtitle: "For agencies and teams managing multiple client sites.",
    price: "$49",
    period: "/month",
    note: "billed annually · or $65 month-to-month",
    features: [
      "Up to 10 WordPress installations",
      "Unlimited translation runs",
      "All WPML content types supported",
      "Glossary & context settings",
      "White-label options",
      "Priority support",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
] as const;

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 border-y border-border/50 bg-white py-20 md:py-28 lg:py-32"
    >
      <div className="container-site">
        <RevealOnScroll className="mb-14 md:mb-16">
          <p className="text-label mb-5">Pricing</p>
          <h2 className="text-display max-w-2xl">
            Simple pricing. No surprises.
          </h2>
          <p className="text-body-muted mt-5 max-w-lg">
            One predictable cost per installation. No per-word charges, no usage caps, no hidden fees. Scale as your site count grows.
          </p>
        </RevealOnScroll>

        <div className="content-pricing grid gap-6 text-left md:grid-cols-2 md:gap-8">
          {tiers.map((tier, i) => (
            <RevealOnScroll key={tier.name} delayMs={i * 90}>
              <Card
                className={cn(
                  "relative flex flex-col overflow-hidden rounded-2xl border-2 bg-card p-0",
                  "transition-[transform,box-shadow] duration-300",
                  tier.highlighted
                    ? "z-[1] border-primary shadow-[0_28px_64px_-32px_rgb(255_77_18_/_0.4)] md:scale-[1.02]"
                    : "border-border/80 hover:border-border"
                )}
              >
                {tier.highlighted && (
                  <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-xl bg-primary px-3.5 py-1.5 font-display text-[0.65rem] font-bold tracking-wider text-white uppercase">
                    Most Popular
                  </div>
                )}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-primary/10 to-transparent",
                    !tier.highlighted && "opacity-35"
                  )}
                  aria-hidden
                />
                <CardHeader className="relative space-y-2 px-9 pb-2 pt-9">
                  <CardTitle className="font-display text-2xl font-bold text-foreground">
                    {tier.name}
                  </CardTitle>
                  <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">
                    {tier.subtitle}
                  </p>
                  <div className="pt-3">
                    <span className="font-display text-4xl font-bold tracking-tight text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-base font-normal text-muted-foreground ml-1">
                      {tier.period}
                    </span>
                    <p className="mt-1 text-xs text-muted-foreground/70">
                      {tier.note}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="relative flex-1 px-9 pb-7 pt-5">
                  <ul className="space-y-3.5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span
                          className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-white"
                          aria-hidden
                        >
                          <Check className="size-3 stroke-[3]" />
                        </span>
                        <span className="text-[0.9375rem] leading-snug text-foreground/80">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="border-0 bg-transparent px-9 pb-9 pt-0 shadow-none">
                  <Link
                    href={siteConfig.cta.primary.href}
                    className={cn(
                      buttonVariants({
                        variant: tier.highlighted ? "default" : "outline",
                      }),
                      "h-12 w-full text-[0.9375rem] font-semibold",
                      tier.highlighted && "shadow-md shadow-orange-950/20"
                    )}
                  >
                    {tier.cta}
                  </Link>
                </CardFooter>
              </Card>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delayMs={180} className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            14-day free trial on all plans · No credit card required · Cancel anytime
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
