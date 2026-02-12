import { AnimateIn } from "@/components/ui/AnimateIn";

export function FrameworkSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="border-t border-border/50 pt-24 md:pt-32">
          <AnimateIn>
            <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-10">
              How We Work
            </p>
          </AnimateIn>

          <AnimateIn delay={0.05}>
            <p className="text-[15px] text-text-secondary max-w-prose leading-[1.85]">
              Every engagement starts with a structured assessment across three
              dimensions: the decision your AI needs to support, how the AI
              system actually behaves in that context, and whether your
              organization is set up to use it well.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="mt-6 text-[15px] text-text-secondary max-w-prose leading-[1.85]">
              This might look like evaluating an AI procurement tool before you
              scale it. Stress-testing an LLM&apos;s ordering behavior in your
              planning environment. Running a focused session with your
              leadership team on where autonomous operation is viable and where
              it isn&apos;t.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <p className="mt-10 text-[15px] text-text-primary max-w-prose leading-[1.85] font-medium">
              The format depends on the problem. The rigor doesn&apos;t.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
