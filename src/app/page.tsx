import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Box,
  FileCode2,
  Layers,
  MousePointer2,
  Palette,
  Type,
  Zap,
} from "lucide-react";

import { SiteShell } from "@/components/layout/site-shell";
import { buttonVariants } from "@/components/ui/button-variants";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.pageTitle,
  description: siteConfig.description,
};

const features = [
  {
    icon: Palette,
    title: "Design tokens",
    description:
      "Semantic CSS variables for color, radius, and type. Swap the theme file in globals.css — every component updates instantly.",
  },
  {
    icon: Type,
    title: "Fluid typography",
    description:
      "Clamp-based scale from label to display-hero. Cal Sans for headings, Inter for UI, JetBrains Mono for code.",
  },
  {
    icon: Layers,
    title: "Surface system",
    description:
      "Six surface variants (primary, accent, secondary, solid…) with optional hover states. Composable, not prescriptive.",
  },
  {
    icon: MousePointer2,
    title: "shadcn components",
    description:
      "Button, Card, Dialog, Sheet, Accordion, Tooltip and 15+ more — headless via Base UI, styled with Tailwind CSS 4.",
  },
  {
    icon: Zap,
    title: "Static export ready",
    description:
      "output: 'export' ships in next.config.ts. Build once, deploy anywhere — Cloudflare Pages, S3, nginx, FTP.",
  },
  {
    icon: Box,
    title: "Accessible by default",
    description:
      "Skip link, aria-current, focus rings, prefers-reduced-motion — WCAG 2.4.1 patterns wired in from the start.",
  },
] as const;

const steps = [
  {
    step: "01",
    title: "Clone & install",
    code: "git clone … && npm install",
  },
  {
    step: "02",
    title: "Set your brand",
    code: "src/config/site.ts",
  },
  {
    step: "03",
    title: "Pick a theme",
    code: "src/app/globals.css → @import",
  },
  {
    step: "04",
    title: "Build & ship",
    code: "npm run build → out/",
  },
] as const;

export default function HomePage() {
  return (
    <SiteShell>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-background">
        {/* Atmosphere */}
        <div
          className="pointer-events-none absolute inset-0 bg-grain-strong"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-48 top-0 h-[700px] w-[700px] rounded-full bg-primary/12 blur-[140px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-48 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/6 blur-[100px]"
          aria-hidden
        />

        <div className="container-site relative pb-28 pt-36 lg:pb-36 lg:pt-44">
          <p className="text-label mb-6 animate-hero-up hero-delay-1">
            {siteConfig.name} · v0.1
          </p>
          <h1
            className="text-display-hero max-w-[15ch] animate-hero-up hero-delay-2"
          >
            {siteConfig.tagline}
          </h1>
          <p className="text-body-lg mt-8 max-w-[52ch] text-muted-foreground animate-hero-up hero-delay-3">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center animate-hero-up hero-delay-4">
            <Link
              href="/design-system"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 rounded-full px-10 text-[0.9375rem] font-semibold shadow-lg shadow-black/20"
              )}
            >
              View design system
              <ArrowRight className="size-4" data-icon="inline-end" />
            </Link>
            <Link
              href="/about"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 rounded-full px-10 text-[0.9375rem] font-semibold text-foreground hover:bg-muted"
              )}
            >
              Get started
            </Link>
          </div>

          {/* Tech stack strip */}
          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground/70 animate-hero-up hero-delay-5">
            {[
              "Next.js App Router",
              "Tailwind CSS 4",
              "shadcn / Base UI",
              "TypeScript",
              "Static export",
            ].map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="h-3 w-px bg-border" aria-hidden />
                )}
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature grid ── */}
      <section className="container-site section-sm">
        <p className="text-label mb-3">What's included</p>
        <h2 className="text-h2 max-w-xl">
          Everything wired up.{" "}
          <span className="text-muted-foreground">Nothing to configure.</span>
        </h2>
        <p className="text-body-muted mt-4 max-w-[52ch]">
          Clone, install, open{" "}
          <code className="font-mono text-sm text-foreground">
            src/config/site.ts
          </code>{" "}
          and start building.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="surface-primary2 surface-hoverable flex flex-col gap-4 p-6"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="size-5 text-primary" aria-hidden />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-body-muted mt-1.5 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quickstart steps ── */}
      <section className="section-muted section-sm">
        <div className="container-site">
          <p className="text-label mb-3">Quickstart</p>
          <h2 className="text-h2 max-w-xl">Up and running in 4 steps.</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="surface-solid p-6">
                <span className="text-gradient-primary font-display text-4xl font-bold leading-none">
                  {s.step}
                </span>
                <h3 className="mt-4 font-display font-semibold text-foreground">
                  {s.title}
                </h3>
                <code className="mt-2 block font-mono text-xs text-muted-foreground">
                  {s.code}
                </code>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className={cn(buttonVariants({ size: "default" }), "rounded-full px-6")}
            >
              Read the full guide
              <ArrowRight className="size-4" data-icon="inline-end" />
            </Link>
            <Link
              href="/design-system"
              className={cn(
                buttonVariants({ variant: "ghost", size: "default" }),
                "rounded-full px-6"
              )}
            >
              <FileCode2 className="size-4" data-icon="inline-start" />
              Explore the design system
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
