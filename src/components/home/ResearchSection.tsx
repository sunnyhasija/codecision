import { AnimateIn } from "@/components/ui/AnimateIn";

export function ResearchSection() {
  return (
    <section className="bg-navy py-32 md:py-48 px-8 md:px-12 relative overflow-hidden">
      {/* Decorative cyan square */}
      <div className="absolute top-20 right-12 w-64 h-64 bg-cyan/20 -z-0 hidden md:block" />

      <div className="max-w-content mx-auto relative z-10">
        <AnimateIn>
          <p className="font-display text-lg uppercase tracking-wider text-sage mb-6">
            The Work
          </p>
          <h2 className="font-display text-5xl md:text-huge uppercase tracking-tighter text-white">
            Behind the
            <br />
            Advisory
          </h2>
        </AnimateIn>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* SCM-Arena */}
          <AnimateIn delay={0.1}>
            <div>
              <p className="text-[12px] uppercase tracking-[0.2em] text-sage/60 mb-6">
                Behavioral Benchmark
              </p>
              <h3 className="font-display text-3xl uppercase tracking-tight text-white mb-6">
                SCM-Arena
              </h3>
              <p className="text-[15px] text-sage/80 leading-[1.85] font-light">
                We built a behavioral benchmark that tests how large language
                models actually make supply chain decisions. Not what they know,
                but how they behave. 144 experimental conditions, 5
                replications each, over 52-round episodes. The results show
                where autonomous operation is viable, where human oversight is
                required, and where deployment shouldn&apos;t proceed.
              </p>
              <p className="mt-4 text-[12px] uppercase tracking-[0.15em] text-taupe">
                Developed at The Ohio State University
              </p>
              <a
                href="https://www.scm-arena.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-6 text-sage hover:translate-x-2 transition-transform duration-500 ease-luxe group"
              >
                <span className="text-sm">scm-arena.com</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </a>
            </div>
          </AnimateIn>

          {/* JBL Paper */}
          <AnimateIn delay={0.2}>
            <div className="md:mt-16">
              <p className="text-[12px] uppercase tracking-[0.2em] text-sage/60 mb-6">
                Peer-Reviewed Research
              </p>
              <h3 className="font-display text-3xl uppercase tracking-tight text-white mb-6">
                AI Trust &amp; Adoption
              </h3>
              <p className="text-[15px] text-sage/80 leading-[1.85] font-light">
                Peer-reviewed research on why the gap between AI&apos;s
                potential and its actual adoption persists, and the
                organizational dynamics that determine whether AI systems are
                accepted, resisted, or misused.
              </p>
              <p className="mt-4 text-[12px] uppercase tracking-[0.15em] text-taupe">
                Journal of Business Logistics, 2022
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
