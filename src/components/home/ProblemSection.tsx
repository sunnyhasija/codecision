import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProblemSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading title="The Problem" />

        <AnimateIn delay={0.1}>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Most organizations judge AI tools by perceived capability. But
            successful deployment depends on fit, not raw performance.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="mt-8 text-text-secondary max-w-2xl leading-relaxed">
            AI systems can destabilize decisions when:
          </p>
          <ul className="mt-4 space-y-3 max-w-2xl">
            {[
              "the task structure is misaligned with model behavior,",
              "the intended users interact with outputs unpredictably,",
              "and organizational incentives and oversight are poorly defined.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-text-secondary"
              >
                <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <p className="mt-8 text-text-secondary max-w-2xl leading-relaxed font-medium text-text-primary">
            Deployment risk is behavioral and systemic, not technical alone.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
