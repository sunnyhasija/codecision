import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const services = [
  {
    title: "Decision Systems Advisory",
    description:
      "Evaluations of AI-enhanced workflows in supply chain, procurement, and operations.",
  },
  {
    title: "AI Deployment Strategy",
    description:
      "Advisory for leaders assessing fit, risk, and governance before scaling AI.",
  },
  {
    title: "Executive Workshops",
    description:
      "Focused sessions for executive and leadership teams on deployment challenges.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading title="What We Do" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={i * 0.1}>
              <Card
                title={service.title}
                description={service.description}
                className="h-full"
              />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
