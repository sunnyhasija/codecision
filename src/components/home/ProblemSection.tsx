import { AnimateIn } from "@/components/ui/AnimateIn";

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <AnimateIn>
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-8">
            The problem
          </p>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <p className="text-base text-text-secondary max-w-prose leading-[1.8]">
            AI tools are evaluated on benchmarks. But real decision environments
            involve dynamic feedback loops, delayed consequences, asymmetric
            incentives, partial information, and human interpretation. A model
            that performs well in isolation can destabilize a live system.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="mt-6 text-base text-text-secondary max-w-prose leading-[1.8]">
            Organizations need to know how AI behaves under operational
            conditions, not how it scores on static tests. That requires a
            different kind of evaluation, and a different kind of advisor.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
