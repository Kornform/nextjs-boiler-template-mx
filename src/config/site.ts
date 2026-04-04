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

  /** Kept for optional marketing sections under `src/components/sections/`. */
  heroEyebrow: "Example eyebrow",
  heroTitle: "Example hero headline — dark slate + mint accent (astro-derived).",
  heroRating: "Optional supporting line",

  description:
    "Semantic color tokens, fluid typography, and shadcn-style components on Next.js App Router. Replace copy and tokens when you ship.",

  url: resolveSiteUrl(),

  nav: [
    { label: "Designsystem", href: "/" },
    { label: "Farben", href: "/#farben" },
    { label: "Typografie", href: "/#typografie" },
    { label: "Über", href: "/about" },
  ] satisfies NavItem[],

  /** Minimal footer links — replace repository href when you publish. */
  footerLinks: [
    { label: "Design system", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "GitHub",
      href: "https://github.com",
      external: true,
    },
  ] satisfies NavItem[],

  cta: {
    primary: { label: "Zu Typografie", href: "/#typografie" },
    secondary: { label: "Formular", href: "/#formular" },
    nav: { label: "Farben", href: "/#farben" },
  },

  links: {
    docs: "/about",
  },
} as const;
