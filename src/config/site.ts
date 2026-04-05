/**
 * Site-wide defaults for this boilerplate.
 * Set `NEXT_PUBLIC_SITE_URL` in `.env.local` (see `.env.example`) for production metadata.
 */

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return "http://localhost:3000";
  try {
    const u = new URL(raw);
    if (u.protocol !== "http:" && u.protocol !== "https:") {
      return "http://localhost:3000";
    }
    return u.origin;
  } catch {
    return "http://localhost:3000";
  }
}

export const siteConfig = {
  name: "Site Kit",
  pageTitle: "Design system — Site Kit",

  brand: {
    prefix: "Site",
    suffix: "Kit",
  },

  tagline: "Next.js + tokens + UI primitives — ready for real projects.",

  /** Used by the example HeroSection in src/components/sections/. Replace with your own copy. */
  heroEyebrow: "Next.js boilerplate",
  heroTitle: "Your next project starts here.",
  heroRating: "Built with shadcn/ui · Tailwind CSS 4 · static export",

  description:
    "Semantic color tokens, fluid typography, and shadcn-style components on Next.js App Router. Swap the theme file and start building — no configuration needed.",

  url: resolveSiteUrl(),

  nav: [
    { label: "Design system", href: "/design-system" },
    { label: "Colors", href: "/design-system#colors" },
    { label: "Typography", href: "/design-system#typography" },
    { label: "About", href: "/about" },
  ] satisfies NavItem[],

  /** Minimal footer links — replace repository href when you publish. */
  footerLinks: [
    { label: "Design system", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "GitHub",
      href: "https://github.com/Kornform/nextjs-boiler-template-mx",
      external: true,
    },
  ] satisfies NavItem[],

  cta: {
    primary: { label: "View design system", href: "/design-system" },
    secondary: { label: "Get started", href: "/about" },
    nav: { label: "Design system", href: "/design-system" },
  },

  links: {
    docs: "/about",
  },
} as const;
