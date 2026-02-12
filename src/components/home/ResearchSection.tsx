import { AnimateIn } from "@/components/ui/AnimateIn";

export function ResearchSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="border-t border-border/50 pt-24 md:pt-32">
          <AnimateIn>
            <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-12">
              The Work Behind the Advisory
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {/* SCM-Arena */}
            <AnimateIn delay={0.05}>
              <div>
                <div className="inline-block px-3 py-1 bg-accent-dim rounded text-xs text-accent mb-5">
                  Behavioral Benchmark
                </div>
                <h3 className="font-serif text-xl text-text-primary mb-4">
                  SCM-Arena
                </h3>
                <p className="text-[15px] text-text-secondary leading-[1.85]">
                  We built a behavioral benchmark that tests how large language
                  models actually make supply chain decisions. Not what they
                  know, but how they behave. 144 experimental conditions, 5
                  replications each, over 52-round episodes. The results show
                  where autonomous operation is viable, where human oversight is
                  required, and where deployment shouldn&apos;t proceed.
                </p>
                <p className="mt-4 text-sm text-text-muted">
                  Developed with Vincent Castillo at The Ohio State University.
                </p>
                <a
                  href="https://www.scm-arena.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-accent hover:text-accent-hover transition-colors duration-300"
                >
                  scm-arena.com
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </a>
              </div>
            </AnimateIn>

            {/* JBL Paper */}
            <AnimateIn delay={0.1}>
              <div>
                <div className="inline-block px-3 py-1 bg-accent-dim rounded text-xs text-accent mb-5">
                  Peer-Reviewed Research
                </div>
                <h3 className="font-serif text-xl text-text-primary mb-4">
                  AI Trust &amp; Organizational Acceptance
                </h3>
                <p className="text-[15px] text-text-secondary leading-[1.85]">
                  Peer-reviewed research on why the gap between AI&apos;s
                  potential and its actual adoption persists, and the
                  organizational dynamics that determine whether AI systems are
                  accepted, resisted, or misused.
                </p>
                <p className="mt-4 text-sm text-text-muted">
                  Published in the <em>Journal of Business Logistics</em> (2022)
                  with Terry Esper at Ohio State. Cited in subsequent JBL work
                  on AI roadmaps for the field.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
