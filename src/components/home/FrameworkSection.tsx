import { AnimateIn } from "@/components/ui/AnimateIn";

const capabilities = [
  "Decision systems assessment",
  "AI behavioral evaluation",
  "Deployment risk analysis",
  "Governance architecture",
  "Organizational readiness",
];

export function FrameworkSection() {
  return (
    <section className="bg-[#fafafa] text-navy py-32 md:py-48 px-8 md:px-12">
      <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Left: capabilities list */}
        <div className="md:col-span-4">
          <AnimateIn>
            <p className="text-[12px] uppercase tracking-[0.2em] text-taupe mb-10">
              How We Work
            </p>
          </AnimateIn>

          <div className="space-y-0">
            {capabilities.map((item, i) => (
              <AnimateIn key={item} delay={0.05 + i * 0.05}>
                <div className="group flex items-center gap-4 py-4 border-b border-navy/10">
                  <span className="block w-10 h-px bg-navy/30 transition-all duration-500 ease-luxe group-hover:w-16" />
                  <span className="text-sm text-navy/70 font-light">
                    {item}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Right: large text */}
        <div className="md:col-span-7 md:col-start-6">
          <AnimateIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter text-navy leading-[0.95]">
              Every engagement starts with{" "}
              <span className="text-taupe italic font-sans font-light normal-case tracking-normal">
                your decision,
              </span>{" "}
              not our framework.
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="mt-10 text-[15px] text-navy/60 leading-[1.85] font-light max-w-lg">
              This might look like evaluating an AI procurement tool before you
              scale it. Stress-testing an LLM&apos;s ordering behavior in your
              planning environment. Running a focused session with your
              leadership team on where autonomous operation is viable and where
              it isn&apos;t.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.25}>
            <p className="mt-6 text-[15px] text-navy font-semibold">
              The format depends on the problem. The rigor doesn&apos;t.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
