import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceBlock } from "@/components/services/ServiceBlock";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI deployment strategy, decision systems advisory, and executive workshops. Three service lines built on evidence.",
};

const services = [
  {
    title: "Decision Systems Advisory",
    description:
      "Structured evaluation of how AI interacts with real operational decision workflows, identifying risk and fit.",
  },
  {
    title: "AI Deployment Strategy",
    description:
      "Executive advisory on whether and how to deploy AI in supply chain, procurement, negotiation, and analytics decision systems.",
  },
  {
    title: "Executive Workshops",
    description:
      "Short, focused sessions for leadership teams on behavioral risks, role asymmetry, and governance architecture.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          title="Services"
          subtitle="Three service lines, each informed by research and designed for operational leaders."
        />

        <div className="mt-8">
          {services.map((service, i) => (
            <ServiceBlock
              key={service.title}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </div>

        <AnimateIn delay={0.3} className="mt-16">
          <Button href="/contact">Start a conversation</Button>
        </AnimateIn>
      </div>
    </div>
  );
}
