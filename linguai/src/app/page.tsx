import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { WhoForSection } from "@/components/sections/who-for-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* 1. What it is + primary CTA */}
        <HeroSection />

        {/* 2. Early credibility */}
        <TrustStripSection />

        {/* 3. Make the problem feel real */}
        <ProblemSection />

        {/* 4. Position LinguAI as the answer */}
        <SolutionSection />

        {/* 5. Show why the old workflow is weaker */}
        <ComparisonSection />

        {/* 6. Concrete reasons to care */}
        <FeaturesSection />

        {/* 7. Reduce perceived complexity */}
        <HowItWorksSection />

        {/* 8. Audience fit */}
        <WhoForSection />

        {/* 9. Trust and social proof */}
        <TestimonialSection />

        {/* 10. Pricing */}
        <PricingSection />

        {/* 11. Remove remaining objections */}
        <FaqSection />

        {/* 12. Final conversion push */}
        <FinalCtaSection />
      </main>

      <SiteFooter />
    </>
  );
}
