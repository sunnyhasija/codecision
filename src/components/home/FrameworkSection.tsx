import { AnimateIn } from "@/components/ui/AnimateIn";

export function FrameworkSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <AnimateIn>
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-8">
            How we evaluate
          </p>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <p className="text-base text-text-secondary max-w-prose leading-[1.8]">
            Codecision applies a structured lens across three dimensions: the
            task structure of the decision, the behavioral characteristics of
            the AI system, and the organizational context in which deployment
            occurs. Misalignment in any dimension creates risk. Alignment
            creates defensible value.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="mt-6 text-base text-text-secondary max-w-prose leading-[1.8]">
            This lens is not theoretical. It is built on ongoing empirical work.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
