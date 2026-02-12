import { AnimateIn } from "@/components/ui/AnimateIn";

export function ResearchSection() {
  return (
    <section className="bg-black text-white py-24 md:py-32 px-8 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <AnimateIn>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-12">
            <span className="text-swiss-accent">03.</span> Research
          </p>
          <h2 className="font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9]">
            Behind The
            <br />
            Advisory<span className="text-swiss-accent">.</span>
          </h2>
        </AnimateIn>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* SCM-Arena */}
          <div className="md:col-span-7">
            <AnimateIn delay={0.05}>
              <div className="border-t-2 border-white pt-8">
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-6">
                  Behavioral Benchmark
                </p>
                <h3 className="font-black text-3xl md:text-4xl uppercase tracking-tight mb-6">
                  SCM-Arena
                </h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-xl">
                  We built a behavioral benchmark that tests how large language
                  models actually make supply chain decisions. Not what they
                  know, but how they behave. 144 experimental conditions, 5
                  replications each, over 52-round episodes.
                </p>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-widest text-white/30">
                  Developed at The Ohio State University
                </p>
                <a
                  href="https://www.scm-arena.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 mt-6 text-sm font-bold hover:text-swiss-accent transition-colors duration-200"
                >
                  scm-arena.com
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* JBL Paper */}
          <div className="md:col-span-5">
            <AnimateIn delay={0.1}>
              <div className="border-t-2 border-white pt-8">
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-6">
                  Peer-Reviewed Research
                </p>
                <h3 className="font-black text-3xl md:text-4xl uppercase tracking-tight mb-6">
                  AI Trust &amp; Adoption
                </h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  Why do organizations resist AI tools that work, and trust
                  ones that don&apos;t? That&apos;s what the paper
                  investigates.
                </p>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-widest text-white/30">
                  Journal of Business Logistics, 2022
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
