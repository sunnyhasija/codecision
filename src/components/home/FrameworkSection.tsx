import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { CALENDLY_URL } from "@/lib/constants";

const dimensions = [
  {
    label: "Task Structure",
    detail:
      "Static or dynamic? One-shot or repeated? Cooperative or adversarial? Observable or constrained?",
  },
  {
    label: "Technology Behavior",
    detail:
      "Does the AI degrade gracefully? Amplify volatility? Introduce asymmetry? Depend on role assignment?",
  },
  {
    label: "Organizational Context",
    detail:
      "Where is oversight exercised? How are incentives structured? How is accountability defined?",
  },
];

export function FrameworkSection() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <AnimateIn>
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-8">
            Our lens
          </p>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <p className="text-base text-text-secondary max-w-prose leading-[1.8]">
            Codecision applies a structured lens to AI-enabled decision systems.
          </p>
        </AnimateIn>

        <div className="mt-14 space-y-10">
          {dimensions.map((dim, i) => (
            <AnimateIn key={dim.label} delay={0.1 + i * 0.05}>
              <div className="max-w-prose">
                <p className="text-sm font-semibold text-text-primary mb-2">
                  {dim.label}
                </p>
                <p className="text-sm text-text-secondary leading-[1.8]">
                  {dim.detail}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3}>
          <p className="mt-14 text-base text-text-primary max-w-prose leading-[1.8] font-medium">
            Deployment succeeds when institutional design matches technological
            behavior.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.35}>
          <div className="mt-12">
            <Button href={CALENDLY_URL} external>
              Schedule a conversation
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
