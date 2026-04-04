"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

const faqs = [
  {
    id: "faq-wpml",
    q: "Do I need WPML installed to use LinguAI?",
    a: "Yes. LinguAI for WPML is built specifically for multilingual WordPress sites that run on WPML. It maps directly to WPML's language structure, translation workflows, and string types. If you're not using WPML, this plugin isn't the right fit.",
  },
  {
    id: "faq-control",
    q: "Do I still keep full control over what gets published?",
    a: "Completely. Every AI-generated translation is a draft until you approve it. You review and edit in WPML's standard translation editor before anything goes live. The workflow is designed around review as a required step — not an optional one.",
  },
  {
    id: "faq-quality",
    q: "Is this meant to replace human review and editing?",
    a: "No. LinguAI generates faster first drafts — it doesn't replace editorial judgment. The goal is to reduce the time between content creation and a reviewable translation, not to eliminate the review step. Teams that care about quality still review before publishing.",
  },
  {
    id: "faq-workflow",
    q: "How does this fit into an existing WPML translation workflow?",
    a: "LinguAI installs as a WordPress plugin and integrates directly with WPML. You don't need to change your existing language setup, content structure, or WPML configuration. Translation runs are initiated from your WordPress admin, and output lands in WPML's translation editor for review.",
  },
  {
    id: "faq-agencies",
    q: "Can agencies use this across multiple client projects?",
    a: "Yes — the Agency plan supports up to 10 WordPress installations, which makes it suitable for managing multiple client sites under a single subscription. Each site runs independently with its own WPML setup.",
  },
  {
    id: "faq-manual",
    q: "Why is this better than continuing with a manual translation workflow?",
    a: "Manual translation workflows don't scale linearly. As your content volume or language count grows, the effort compounds — more briefings, more handoffs, more review cycles. LinguAI reduces the generation step dramatically, which means updates go live faster and the operational overhead of multilingual publishing decreases.",
  },
  {
    id: "faq-learning",
    q: "Is there a significant learning curve?",
    a: "No. LinguAI is designed to feel like an extension of WordPress — not a new tool that needs to be learned separately. If you know how to use WPML, you'll be comfortable with LinguAI within the first session. Initial configuration takes a few minutes.",
  },
  {
    id: "faq-trial",
    q: "How does the free trial work?",
    a: "Every plan comes with a 14-day free trial. You get full access to the plan you choose. No credit card is required to start. If it's not the right fit after the trial period, you can cancel with no obligation.",
  },
] as const;

export function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-border bg-muted/15 py-20 md:py-28 lg:py-32"
    >
      <div className="container-site">
        <div className="grid gap-14 md:grid-cols-[1fr_1.6fr] md:gap-16 lg:gap-20">
          {/* Left: heading */}
          <RevealOnScroll>
            <p className="text-label mb-5">FAQ</p>
            <h2 className="text-display text-foreground">
              Questions, answered.
            </h2>
            <p className="text-body-muted mt-5">
              Practical answers to the questions most teams ask before committing to a new workflow tool.
            </p>
          </RevealOnScroll>

          {/* Right: accordion */}
          <RevealOnScroll delayMs={80}>
            <Accordion
              defaultValue={["faq-wpml"]}
              className="divide-y divide-border overflow-hidden rounded-xl border border-border/80 bg-card"
            >
              {faqs.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-0"
                >
                  <AccordionTrigger className="py-4 text-[0.9375rem] font-semibold text-foreground md:text-base">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
