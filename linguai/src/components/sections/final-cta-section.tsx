import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button-variants";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { cn } from "@/lib/utils";

export function FinalCtaSection() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
      style={{ backgroundColor: "var(--deep, #111112)" }}
    >
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 bg-grain-strong opacity-60"
        aria-hidden
      />
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 size-[500px] rounded-full bg-primary/15 blur-[120px]"
        aria-hidden
      />

      <div className="container-site relative">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <p className="text-label-on-dark mb-6">Get started</p>
          <h2
            className="font-display font-bold tracking-tight text-balance text-white"
            style={{
              fontSize: "clamp(2rem, 1rem + 4.5vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            Your WPML site. More languages. Less effort.
          </h2>
          <p className="mt-6 text-[1.0625rem] leading-relaxed text-white/50">
            A 14-day free trial. No credit card required. Cancel anytime if it&apos;s not the right fit.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={siteConfig.cta.primary.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 min-w-[200px] rounded-full px-10 text-[0.9375rem] font-semibold shadow-lg shadow-primary/30"
              )}
            >
              {siteConfig.cta.primary.label}
            </Link>
            <Link
              href={siteConfig.cta.secondary.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 rounded-full border-white/20 bg-transparent px-10 text-[0.9375rem] font-semibold text-white hover:bg-white/10 hover:text-white"
              )}
            >
              {siteConfig.cta.secondary.label}
              <ArrowUpRight className="size-4 opacity-70" data-icon="inline-end" />
            </Link>
          </div>

          <p className="mt-7 text-sm text-white/30">
            Works with your existing WPML setup · No migration required
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
