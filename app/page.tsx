import { CurriculumSection } from "./components/sections/CurriculumSection";
import { FaqSection } from "./components/sections/FaqSection";
import { GuaranteeSection } from "./components/sections/GuaranteeSection";
import { HeroSection } from "./components/sections/HeroSection";
import { LeadCaptureSection } from "./components/sections/LeadCaptureSection";
import { MetricsSection } from "./components/sections/MetricsSection";
import { PainPromiseSection } from "./components/sections/PainPromiseSection";
import { PersonasSection } from "./components/sections/PersonasSection";
import { PricingSection } from "./components/sections/PricingSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { ValuePillarsSection } from "./components/sections/ValuePillarsSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <PainPromiseSection />
      <PersonasSection />
      <ValuePillarsSection />
      <CurriculumSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <PricingSection />
      <LeadCaptureSection />
      <FaqSection />
    </>
  );
}
