import type { Metadata } from "next";
import { FirmSection } from "@/components/about/FirmSection";
import { FounderSection } from "@/components/about/FounderSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Codecision is a research-informed advisory firm focused on AI behavior in decision systems. Learn about the firm and its founder.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-content px-6">
        <FirmSection />
        <FounderSection />
      </div>
    </div>
  );
}
