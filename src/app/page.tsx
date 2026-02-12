import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { FrameworkSection } from "@/components/home/FrameworkSection";
import { ResearchSection } from "@/components/home/ResearchSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Codecision | AI Advisory for Decision Systems",
  description:
    "Codecision advises organizations evaluating AI in supply chain and operational decision systems. Grounded in published research and large-scale behavioral evaluation.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <FrameworkSection />
      <ResearchSection />
      <CTASection />
    </>
  );
}
