import { AnimateIn } from "@/components/ui/AnimateIn";

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
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="border-t border-border/50 pt-24 md:pt-32">
          <AnimateIn>
            <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-10">
              How We Evaluate
            </p>
          </AnimateIn>

          <AnimateIn delay={0.05}>
            <p className="text-[15px] text-text-secondary max-w-prose leading-[1.85] mb-16">
              Codecision applies a structured lens to AI-enabled decision
              systems. This lens is not theoretical. It is built on ongoing
              empirical work.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/30 rounded-lg overflow-hidden">
            {dimensions.map((dim, i) => (
              <AnimateIn key={dim.label} delay={0.1 + i * 0.05}>
                <div className="bg-surface p-8 md:p-10 h-full">
                  <p className="text-xs font-mono text-accent/70 mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="text-sm font-medium text-text-primary mb-3">
                    {dim.label}
                  </p>
                  <p className="text-sm text-text-muted leading-[1.8]">
                    {dim.detail}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3}>
            <p className="mt-14 text-[15px] text-text-primary leading-[1.85] font-medium max-w-prose">
              Deployment succeeds when institutional design matches
              technological behavior.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
