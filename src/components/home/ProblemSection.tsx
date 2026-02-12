import { AnimateIn } from "@/components/ui/AnimateIn";

export function ProblemSection() {
  return (
    <section className="bg-white text-navy py-32 md:py-48 px-8 md:px-12">
      <div className="max-w-content mx-auto">
        <AnimateIn>
          <h2 className="font-display text-5xl md:text-massive uppercase tracking-tighter text-navy">
            The Evaluation
            <br />
            <span className="text-taupe">Gap</span>
          </h2>
        </AnimateIn>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <AnimateIn delay={0.1}>
              <p className="text-[15px] text-navy/70 leading-[1.85] font-light">
                AI tools are evaluated on benchmarks. Your decisions happen in
                environments with feedback loops, delayed consequences, partial
                information, and human interpretation.
              </p>
            </AnimateIn>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <AnimateIn delay={0.2}>
              <p className="text-[15px] text-navy/70 leading-[1.85] font-light">
                A model that performs well in isolation can destabilize a live
                system. Organizations need to understand how AI behaves under
                operational conditions. That requires a different kind of
                evaluation, and a different kind of advisor.
              </p>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
