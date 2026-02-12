import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { FrameworkSection } from "@/components/home/FrameworkSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ResearchPreview } from "@/components/home/ResearchPreview";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Codecision | Strategic AI Advisory for Operations",
  description:
    "Codecision helps organizations evaluate AI-enabled decision systems in supply chain and operational contexts. Research-informed. No hype.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <FrameworkSection />
      <ServicesPreview />
      <ResearchPreview />
      <CTASection />
    </>
  );
}
