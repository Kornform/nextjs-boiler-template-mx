import Link from "next/link";

import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer
      className="relative mt-auto overflow-hidden"
      style={{ backgroundColor: "var(--footer-bg)" }}
    >
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 bg-grain opacity-40"
        aria-hidden
      />

      {/* Main footer content */}
      <div className="container-site relative py-14 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand + description */}
          <div className="max-w-xs">
            <p className="font-display text-xl font-bold tracking-tight text-white">
              {siteConfig.brand.prefix}
              <span className="text-primary">{siteConfig.brand.suffix}</span>
              <span className="ml-2 text-white/30 font-normal text-sm">for WPML</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              AI-assisted translation for WordPress sites running WPML. Faster publishing cycles with full editorial control.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="mb-4 text-[0.65rem] font-semibold tracking-[0.25em] text-zinc-600 uppercase">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {siteConfig.footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-zinc-500 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <div>
            <p className="mb-4 text-[0.65rem] font-semibold tracking-[0.25em] text-zinc-600 uppercase">
              Legal
            </p>
            <ul className="space-y-2.5">
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map(
                (label) => (
                  <li key={label}>
                    <Link
                      href="#"
                      className="text-sm font-medium text-zinc-500 underline-offset-4 transition-colors hover:text-white hover:underline"
                    >
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} LinguAI for WPML. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700">
            Not affiliated with or endorsed by WPML / OnTheGoSystems.
          </p>
        </div>
      </div>

      {/* Oversized wordmark — decorative */}
      <div className="relative overflow-hidden border-t border-white/[0.05] py-5 md:py-8">
        <p
          className="font-display text-[clamp(3rem,15vw,11rem)] font-extrabold leading-[0.82] tracking-[-0.06em] text-white/[0.04] select-none whitespace-nowrap"
          aria-hidden
        >
          LinguAI · LinguAI · LinguAI
        </p>
      </div>
    </footer>
  );
}
