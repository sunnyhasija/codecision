import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResearchArea } from "@/components/research/ResearchArea";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Ongoing research in behavioral benchmarking, negotiation dynamics, and AI trust and adoption in supply chain contexts.",
};

const areas = [
  {
    title: "Behavioral Benchmarking",
    description:
      "SCM-Arena: a benchmark evaluating how AI behaves in decision systems with dynamic feedback.",
  },
  {
    title: "Negotiation & Role Asymmetry",
    description:
      "Large-scale experiments showing role assignment bias in AI-mediated negotiations.",
  },
  {
    title: "AI Trust & Adoption",
    description:
      "Peer-reviewed research on organizational trust and acceptance of AI in supply chain contexts.",
  },
];

export default function ResearchPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          title="Research"
          subtitle="Active research that informs every engagement."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {areas.map((area, i) => (
            <ResearchArea
              key={area.title}
              title={area.title}
              description={area.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
