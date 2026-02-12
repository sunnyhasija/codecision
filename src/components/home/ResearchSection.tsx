import { AnimateIn } from "@/components/ui/AnimateIn";

export function ResearchSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <AnimateIn>
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-12">
            The work behind the advisory
          </p>
        </AnimateIn>

        {/* SCM-Arena */}
        <AnimateIn delay={0.05}>
          <div className="max-w-prose">
            <p className="text-sm font-semibold text-text-primary">
              SCM-Arena
            </p>
            <p className="mt-3 text-base text-text-secondary leading-[1.8]">
              A behavioral benchmark that evaluates how large language models
              make decisions in supply chain environments. Not what they know,
              but how they behave: across 144 experimental conditions, 5
              replications each, over 52-round episodes. It measures cost
              degradation, demand amplification, stability under stress, and
              failure modes. The results inform where autonomous operation is
              viable, where human oversight is required, and where deployment
              should not proceed.
            </p>
            <a
              href="https://www.scm-arena.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-sm text-accent hover:text-accent-hover transition-colors"
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
          <div className="mt-14 max-w-prose">
            <p className="text-sm font-semibold text-text-primary">
              AI Trust & Organizational Acceptance
            </p>
            <p className="mt-3 text-base text-text-secondary leading-[1.8]">
              Peer-reviewed research on why the gap between AI&apos;s potential
              and its actual adoption persists. A qualitative investigation of
              how organizations reconcile vendor claims with deployment
              realities, and the trust dynamics that determine whether AI
              systems are accepted, resisted, or misused.
            </p>
            <p className="mt-3 text-xs text-text-muted">
              Journal of Business Logistics, 2022
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
