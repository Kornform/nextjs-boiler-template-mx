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
    q: "Do I need WPML?",
    a: "Yes. This plugin is built for multilingual WordPress workflows powered by WPML and maps to its strings, posts, and translation structure.",
  },
  {
    id: "faq-trial",
    q: "How does the 14-day free trial work?",
    a: "You get full access to the plan you choose. No credit card is required to start — cancel anytime during the trial if it is not a fit.",
  },
  {
    id: "faq-data",
    q: "Where does my content live?",
    a: "Your content stays in WordPress. Translation runs in your existing admin workflow; check the docs for any external API requirements.",
  },
  {
    id: "faq-languages",
    q: "Which languages are supported?",
    a: "You configure languages in WPML — the plugin translates what you have set up, with glossaries and review where you need them.",
  },
] as const;

export function FaqSection() {
  return (
    <section
      id="faq"
      className="section-sm scroll-mt-24 border-t border-border/50 bg-white"
    >
      <div className="container-site">
        <RevealOnScroll className="content-intro">
          <p className="text-label mb-4">FAQ</p>
          <h2 className="text-h2 text-foreground">Questions, answered</h2>
        </RevealOnScroll>

        <RevealOnScroll delayMs={80} className="mx-auto mt-12 max-w-2xl">
          <Accordion
            defaultValue={["faq-wpml"]}
            className="divide-y divide-border/80 rounded-2xl border border-border/80 bg-card/80 px-2 shadow-[0_18px_48px_-28px_rgba(12,18,34,0.2)] backdrop-blur-sm sm:px-4"
          >
            {faqs.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-0 px-2 data-[state=open]:bg-transparent sm:px-4"
              >
                <AccordionTrigger className="py-5 text-left text-[0.9375rem] font-semibold hover:no-underline md:text-base">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-body-muted pb-5 pt-0">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealOnScroll>
      </div>
    </section>
  );
}
