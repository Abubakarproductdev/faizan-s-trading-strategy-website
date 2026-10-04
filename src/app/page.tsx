import type { Metadata } from "next";
import { CurtainSection } from "@/components/curtain-section";
import { AttentionSection } from "@/components/sections/attention-section";
import { SplitVideoSection } from "@/components/sections/split-video-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { HallOfFameSection } from "@/components/sections/hall-of-fame-section";
import { FormSection } from "@/components/sections/form-section";

export const metadata: Metadata = {
  title: "FK Futures — Precision, executed",
  description:
    "A trader-led hybrid execution ecosystem combining a fast-paced strategy, precision infrastructure, tools, community, and mentorship.",
};

export default function HomePage() {
  return (
    <main className="relative bg-[#0a0a09]">
      {/* 01: Landing Page (Theme: BLACK) */}
      <CurtainSection id="attention" index={1}>
        <AttentionSection />
      </CurtainSection>

      {/* 02: Split Video & 10-12 Words (Theme: WHITE) */}
      <CurtainSection id="split-video" index={2}>
        <SplitVideoSection />
      </CurtainSection>

      {/* 03: The System & Pricing (Theme: GREEN) */}
      <CurtainSection id="pricing" index={3}>
        <PricingSection />
      </CurtainSection>

      {/* 04: Hall of Fame Bento Grid (Theme: BLACK) */}
      <CurtainSection id="hall-of-fame" index={4}>
        <HallOfFameSection />
      </CurtainSection>

      {/* 05: Application Form & Disclosures (Theme: WHITE) */}
      <CurtainSection id="section-5" index={5} isLast>
        <FormSection />
      </CurtainSection>
    </main>
  );
}
