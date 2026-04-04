/**
 * Site-wide configuration — LinguAI for WPML landing page.
 */

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const siteConfig = {
  name: "LinguAI for WPML",
  pageTitle: "LinguAI for WPML — Faster Multilingual Publishing for WordPress",

  brand: {
    prefix: "Lingui",
    suffix: "AI",
  },

  tagline: "Faster multilingual publishing. Less manual work. Full editorial control.",

  heroEyebrow: "AI-assisted translation for WPML workflows",

  heroTitle: "Multilingual publishing without the manual overhead.",

  description:
    "LinguAI for WPML adds AI-assisted translation to your existing WPML workflow. Generate draft translations faster, keep editorial review, and publish in more languages with significantly less repetitive work.",

  heroRating: "Rated 5.0 · WordPress.org",

  url: "https://linguai.example.com",

  nav: [
    { label: "Features", href: "/#features" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ] satisfies NavItem[],

  footerNav: [
    { label: "Features", href: "/#features" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "WordPress.org", href: "#" },
    { label: "Documentation", href: "#" },
  ] satisfies NavItem[],

  cta: {
    primary: { label: "Start Free Trial", href: "/#pricing" },
    secondary: { label: "Book a Demo", href: "#" },
    nav: { label: "Start Trial", href: "/#pricing" },
    footer: { label: "Start Free Trial", href: "/#pricing" },
  },

  links: {
    wordpress: "https://wordpress.org/plugins/",
    docs: "/#faq",
  },
} as const;
