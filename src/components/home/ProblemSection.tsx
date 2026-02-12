import { AnimateIn } from "@/components/ui/AnimateIn";

export function ProblemSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="border-t border-border/50 pt-24 md:pt-32">
          <AnimateIn>
            <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-10">
              The Problem
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <AnimateIn delay={0.05}>
                <h2 className="font-serif text-heading text-text-primary">
                  Benchmarks measure knowledge. Deployment requires behavior.
                </h2>
              </AnimateIn>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <AnimateIn delay={0.1}>
                <p className="text-[15px] text-text-secondary leading-[1.85]">
                  Real decision environments involve dynamic feedback loops,
                  delayed consequences, asymmetric incentives, partial
                  information, and human interpretation. A model that performs
                  well in isolation can destabilize a live system.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.15}>
                <p className="mt-6 text-[15px] text-text-secondary leading-[1.85]">
                  Organizations need to know how AI behaves under operational
                  conditions, not how it scores on static tests. That requires a
                  different kind of evaluation, and a different kind of advisor.
                </p>
              </AnimateIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
