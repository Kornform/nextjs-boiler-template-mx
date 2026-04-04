import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProfilesStripSection } from "@/components/sections/profiles-strip-section";
import { StatsSection } from "@/components/sections/stats-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />
        <ProfilesStripSection />
        <StatsSection />
        <ComparisonSection />
        <FeaturesSection />
        <TestimonialSection />
        <PricingSection />
        <FaqSection />
      </main>

      <SiteFooter />
    </>
  );
}
