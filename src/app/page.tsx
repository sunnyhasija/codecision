import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { FrameworkSection } from "@/components/home/FrameworkSection";

export const metadata: Metadata = {
  title: "Codecision | AI Advisory for Decision Systems",
  description:
    "Codecision advises organizations evaluating AI in supply chain and operational decision systems. Behavioral risk. Deployment discipline.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <FrameworkSection />
    </>
  );
}
