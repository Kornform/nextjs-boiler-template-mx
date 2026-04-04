import { Building2, Globe, Megaphone, User } from "lucide-react";

import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { cn } from "@/lib/utils";

const audiences = [
  {
    icon: Building2,
    label: "Agencies",
    title: "WordPress agencies managing multilingual client sites",
    challenge:
      "You run multilingual builds for clients across different industries. Manual translation adds overhead to every engagement. Without a structured process, each project is a custom effort.",
    fit: "LinguAI gives your team a repeatable workflow template that handles the translation layer consistently — so multilingual projects don't require starting from scratch each time.",
  },
  {
    icon: Globe,
    label: "Businesses",
    title: "Businesses with WPML-powered websites",
    challenge:
      "Your site runs in multiple languages and every content update requires a round of translation before it's live. Publishing cycles are longer than they need to be.",
    fit: "LinguAI reduces the time between content creation and multilingual publishing — so updates go live faster across all your languages without waiting on manual handoff cycles.",
  },
  {
    icon: Megaphone,
    label: "Marketing teams",
    title: "Marketing and content teams with international reach",
    challenge:
      "You produce content regularly and need it live in multiple languages to serve international audiences. Coordinating translation adds friction to every campaign or content calendar.",
    fit: "LinguAI gives you a faster first draft to review and refine — so your team keeps the editorial control while cutting the time it takes to go from written content to multilingual publish.",
  },
  {
    icon: User,
    label: "Site owners",
    title: "Site owners and website managers",
    challenge:
      "You manage a multilingual WordPress site and handle translation yourself or coordinate with a small team. The repetitive work of re-translating updates is a real ongoing cost.",
    fit: "LinguAI reduces the manual effort on every content cycle — so maintaining multiple languages doesn't require disproportionate time relative to the content itself.",
  },
] as const;

export function WhoForSection() {
  return (
    <section className="section-muted border-y border-border/60 py-20 md:py-28 lg:py-32">
      <div className="container-site">
        <RevealOnScroll className="mb-14 md:mb-16">
          <p className="text-label mb-5">Who it&apos;s for</p>
          <h2 className="text-display max-w-2xl">
            Built for teams that ship multilingual websites.
          </h2>
          <p className="text-body-muted mt-5 max-w-lg">
            LinguAI for WPML fits into four distinct workflows. If you manage multilingual WordPress content, it&apos;s relevant to you.
          </p>
        </RevealOnScroll>

        <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
          {audiences.map((audience, i) => (
            <RevealOnScroll key={audience.label} delayMs={i * 75}>
              <div
                className={cn(
                  "group h-full rounded-xl border border-border/70 bg-white p-7 md:p-8",
                  "transition-[transform,box-shadow,border-color] duration-300",
                  "hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_20px_48px_-28px_rgba(12,18,34,0.18)]"
                )}
              >
                {/* Icon + label */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/8 text-primary ring-1 ring-primary/15 transition-colors group-hover:bg-primary/12">
                    <audience.icon className="size-4.5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <span className="font-display text-[0.7rem] font-bold tracking-[0.22em] text-primary uppercase">
                    {audience.label}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold leading-snug text-foreground mb-4">
                  {audience.title}
                </h3>

                {/* Challenge */}
                <div className="mb-4">
                  <p className="text-[0.8rem] font-semibold uppercase tracking-wide text-muted-foreground/70 mb-1.5">
                    The challenge
                  </p>
                  <p className="text-[0.9rem] leading-relaxed text-muted-foreground">
                    {audience.challenge}
                  </p>
                </div>

                {/* Fit */}
                <div className="border-t border-border/50 pt-4">
                  <p className="text-[0.8rem] font-semibold uppercase tracking-wide text-primary/80 mb-1.5">
                    How LinguAI fits
                  </p>
                  <p className="text-[0.9rem] leading-relaxed text-foreground/75">
                    {audience.fit}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
