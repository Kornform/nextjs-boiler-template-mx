/**
 * Site-wide configuration — WPML AI landing (conversion-focused).
 */

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const siteConfig = {
  name: "WPML AI",
  pageTitle: "AI Translate for WPML | 10x Faster",

  brand: {
    prefix: "WPML",
    suffix: "AI",
  },

  tagline:
    "Join hundreds of smart developers saving time and money with AI-powered WPML translations.",

  heroEyebrow: "The smartest companion for WPML",

  heroTitle: "Translate Your WPML Site 10x Faster with AI.",

  description:
    "Stop wasting hours on manual translations. Our plugin integrates directly with WPML to auto-translate pages, posts, and products with human-like accuracy in minutes.",

  heroRating: "Rated 5.0 on WordPress.org",

  url: "https://wpmlai.example.com",

  nav: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ] satisfies NavItem[],

  footerNav: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ] satisfies NavItem[],

  cta: {
    primary: { label: "Start 14-Day Free Trial", href: "/#pricing" },
    secondary: { label: "Watch 1-Min Demo", href: "#" },
    nav: { label: "Get Started", href: "/#pricing" },
    footer: { label: "Start Your 14-Day Free Trial", href: "/#pricing" },
  },

  links: {
    wordpress: "https://wordpress.org/plugins/",
    docs: "/#faq",
  },
} as const;
