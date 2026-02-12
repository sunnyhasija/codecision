import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    label: "Task",
    description:
      "The structure of the decision: dynamic, delayed, adversarial, cooperative.",
  },
  {
    label: "Technology",
    description:
      "Behavioral characteristics of the AI system: stability, degradation, bias.",
  },
  {
    label: "Trait",
    description:
      "How humans interact with the AI: trust, anchoring, oversight behavior.",
  },
];

export function FrameworkSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          title="Our Framework"
          subtitle="AI decision systems perform well only when three dimensions align."
        />

        <AnimateIn delay={0.1}>
          <p className="text-xs uppercase tracking-widest text-accent mb-10">
            Task &ndash; Technology &ndash; Trait Fit
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <AnimateIn key={pillar.label} delay={0.1 + i * 0.1}>
              <div className="border border-border rounded-lg p-6 bg-background h-full">
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                  {pillar.label}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.4}>
          <p className="mt-10 text-text-primary font-medium">
            Misalignment creates risk. Alignment creates value.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
