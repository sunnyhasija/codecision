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
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-4">
            Services
          </p>
          <p className="text-base text-text-secondary max-w-prose leading-[1.8]">
            Codecision works with organizations at the point where AI capability
            meets operational reality. Each engagement draws on published
            research and empirical behavioral evaluation.
          </p>
        </AnimateIn>

        <div className="mt-16 space-y-0">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={0.05 + i * 0.05}>
              <div className="py-12 border-t border-border">
                <div className="flex items-baseline gap-6 max-w-prose">
                  <span className="text-xs text-text-muted font-mono tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-base font-semibold text-text-primary mb-3">
                      {service.title}
                    </h2>
                    <p className="text-sm text-text-secondary leading-[1.8]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.25} className="mt-12">
          <Button href={CALENDLY_URL} external>
            Schedule a conversation
          </Button>
        </AnimateIn>
      </div>
    </div>
  );
}
