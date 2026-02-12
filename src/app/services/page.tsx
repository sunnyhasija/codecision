import type { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Decision systems advisory, AI deployment strategy, and executive workshops. Built on behavioral research, not trend reports.",
};

const services = [
  {
    title: "Decision Systems Advisory",
    description:
      "Structured evaluation of AI-supported workflows in procurement, planning, negotiation, and analytics. We assess how the AI actually behaves in your decision environment, not how it performs on generic benchmarks.",
  },
  {
    title: "AI Deployment Strategy",
    description:
      "Assessment of fit before scale. Where to automate, where to constrain, where to retain human control. Informed by behavioral benchmarking across hundreds of experimental conditions.",
  },
  {
    title: "Executive Workshops",
    description:
      "Focused sessions for leadership teams on behavioral risk, role asymmetry, and governance architecture in AI-enabled decisions. Research-grounded, not vendor-driven.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <AnimateIn>
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-8">
            Services
          </p>
          <h1 className="font-serif text-display-sm text-text-primary max-w-xl mb-8">
            Where capability meets operational reality.
          </h1>
          <p className="text-[15px] text-text-secondary max-w-prose leading-[1.85]">
            Each engagement draws on published research and empirical behavioral
            evaluation. No trend reports. No vendor narratives.
          </p>
        </AnimateIn>

        <div className="mt-20">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={0.05 + i * 0.05}>
              <div className="py-12 border-t border-border/50 last:border-b last:border-border/50">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-1">
                    <span className="text-xs font-mono text-accent/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <h2 className="text-sm font-medium text-text-primary">
                      {service.title}
                    </h2>
                  </div>
                  <div className="md:col-span-7 md:col-start-6">
                    <p className="text-[15px] text-text-secondary leading-[1.85]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.25} className="mt-16">
          <Button href={CALENDLY_URL} external>
            Schedule a conversation
          </Button>
        </AnimateIn>
      </div>
    </div>
  );
}
