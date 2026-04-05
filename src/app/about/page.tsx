import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/layout/site-shell";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Getting started",
  description:
    "How to set up a new project from this boilerplate: branding, theming, pages, and deployment.",
};

const steps = [
  {
    title: "1. Clone & install",
    description: "Get the code and install dependencies.",
    items: [
      {
        label: "Clone or fork",
        value: "git clone https://github.com/Kornform/nextjs-boiler-template-mx",
      },
      { label: "Install", value: "npm install" },
      { label: "Dev server", value: "npm run dev  →  localhost:3000" },
    ],
  },
  {
    title: "2. Set your brand",
    description: (
      <>
        Open{" "}
        <code className="font-mono text-xs text-foreground">
          src/config/site.ts
        </code>{" "}
        — it is the single source of truth for all global values.
      </>
    ),
    items: [
      { label: "name / brand", value: "Site name, prefix/suffix split for styled logo" },
      { label: "tagline / description", value: "Used in metadata and hero copy" },
      { label: "nav / footerLinks", value: "Navigation items — add, remove or reorder" },
      { label: "cta.*", value: "Primary, secondary and nav CTA labels + hrefs" },
      { label: "url", value: "Set NEXT_PUBLIC_SITE_URL in .env.local for production" },
    ],
  },
  {
    title: "3. Pick or build a theme",
    description: (
      <>
        All design tokens live in{" "}
        <code className="font-mono text-xs text-foreground">
          src/app/themes/
        </code>
        . Swapping one import line changes the entire visual system.
      </>
    ),
    items: [
      { label: "dark-mint.css", value: "Slate-950 canvas + mint CTA (default)" },
      { label: "light-sand.css", value: "Warm off-white + amber CTA (example)" },
      {
        label: "Custom theme",
        value: 'Copy any theme file, override the variables, update the @import in globals.css',
      },
    ],
  },
  {
    title: "4. Add pages",
    description: (
      <>
        Use the Next.js App Router: create a folder under{" "}
        <code className="font-mono text-xs text-foreground">src/app/</code> with
        a <code className="font-mono text-xs text-foreground">page.tsx</code>{" "}
        file. Wrap content in{" "}
        <code className="font-mono text-xs text-foreground">
          {"<SiteShell>"}
        </code>{" "}
        to get the shared header and footer.
      </>
    ),
    items: [
      {
        label: "Export metadata",
        value: "export const metadata: Metadata = { title, description }",
      },
      {
        label: "Wrap in SiteShell",
        value: "import { SiteShell } from '@/components/layout/site-shell'",
      },
      {
        label: "Use section components",
        value: "src/components/sections/ — 14 ready-made marketing blocks",
      },
    ],
  },
  {
    title: "5. Build & deploy",
    description: (
      <>
        The project is configured for static export (
        <code className="font-mono text-xs text-foreground">
          output: &apos;export&apos;
        </code>{" "}
        in next.config.ts). No Node.js runtime needed after build.
      </>
    ),
    items: [
      { label: "Build", value: "npm run build  →  generates out/" },
      { label: "Preview locally", value: "npx serve out/" },
      {
        label: "Deploy",
        value: "Upload out/ to any static host: Cloudflare Pages, S3, nginx, FTP",
      },
    ],
  },
] as const;

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="container-site section-sm pb-24">
        <p className="text-label mb-3 text-primary">Documentation</p>
        <h1 className="text-h1 max-w-2xl text-balance">
          Getting started
        </h1>
        <p className="text-body-muted mt-4 max-w-2xl">
          Everything you need to go from clone to production. The boilerplate is
          intentionally minimal — clone, configure three things, and start
          building.
        </p>

        <div className="mt-12 flex flex-col gap-6">
          {steps.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="divide-y divide-border/60">
                  {section.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:gap-8"
                    >
                      <code className="w-full shrink-0 font-mono text-xs text-primary sm:w-36">
                        {item.label}
                      </code>
                      <p className="text-sm text-muted-foreground">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/design-system" className={buttonVariants({ size: "default" })}>
            ← Back to design system
          </Link>
          <Link
            href="https://github.com/Kornform/nextjs-boiler-template-mx"
            target="_blank"
            rel="noreferrer noopener"
            className={buttonVariants({ variant: "outline", size: "default" })}
          >
            View on GitHub
            <span className="sr-only"> (opens in new tab)</span>
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
