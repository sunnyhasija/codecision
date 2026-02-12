import type { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Decision systems advisory, AI deployment strategy, and executive workshops for operational leaders.",
};

const services = [
  {
    title: "Decision Systems Advisory",
    description:
      "Structured evaluation of AI-supported workflows in procurement, planning, negotiation, and analytics contexts.",
  },
  {
    title: "AI Deployment Strategy",
    description:
      "Assessment of fit before scale: where to automate, where to constrain, where to retain human control.",
  },
  {
    title: "Executive Workshops",
    description:
      "Focused sessions on behavioral risk, role asymmetry, and governance architecture in AI-enabled decisions.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <AnimateIn>
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-8">
            Services
          </p>
        </AnimateIn>

        <div className="space-y-16">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={0.05 + i * 0.05}>
              <div className="max-w-prose pb-16 border-b border-border last:border-b-0 last:pb-0">
                <div className="flex items-baseline gap-5">
                  <span className="text-xs text-text-muted font-mono tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-text-primary mb-3">
                      {service.title}
                    </h2>
                    <p className="text-base text-text-secondary leading-[1.8]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.25} className="mt-20">
          <Button href={CALENDLY_URL} external>
            Schedule a conversation
          </Button>
        </AnimateIn>
      </div>
    </div>
  );
}
