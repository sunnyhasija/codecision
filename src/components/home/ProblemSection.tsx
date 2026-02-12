import { AnimateIn } from "@/components/ui/AnimateIn";

export function ProblemSection() {
  return (
    <section className="bg-swiss-muted py-24 md:py-32 px-8 md:px-12 relative">
      <div className="absolute inset-0 swiss-dots pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <AnimateIn>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-12">
            <span className="text-swiss-accent">01.</span> The Problem
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7">
            <AnimateIn delay={0.05}>
              <h2 className="font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9]">
                The
                <br />
                Evaluation
                <br />
                Gap<span className="text-swiss-accent">.</span>
              </h2>
            </AnimateIn>
          </div>

          <div className="md:col-span-5 flex flex-col justify-end">
            <AnimateIn delay={0.1}>
              <div className="border-l-4 border-black pl-6 space-y-6">
                <p className="text-sm md:text-base font-medium leading-relaxed">
                  Most organizations evaluating AI for supply chain decisions
                  rely on the vendor&apos;s own benchmarks. That is not
                  evaluation. That is marketing.
                </p>
                <p className="text-sm md:text-base text-black/60 leading-relaxed">
                  The gap between what AI tools promise and how they actually
                  behave in operational environments is where the risk lives. We
                  close that gap with behavioral evidence, not demos.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
