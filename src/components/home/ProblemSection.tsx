import { AnimateIn } from "@/components/ui/AnimateIn";

export function ProblemSection() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <AnimateIn>
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-8">
            The problem
          </p>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <p className="text-base text-text-secondary max-w-prose leading-[1.8]">
            AI tools are often evaluated on benchmark performance. But real
            decision environments involve dynamic feedback loops, delayed
            consequences, asymmetric incentives, partial information, and human
            interpretation.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="mt-8 text-base text-text-secondary max-w-prose leading-[1.8]">
            A model that performs well in isolation may behave unpredictably
            inside a live decision system. Deployment risk is systemic, not
            technical.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
