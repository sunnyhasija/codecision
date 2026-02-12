import { AnimateIn } from "@/components/ui/AnimateIn";

export function FounderSection() {
  return (
    <AnimateIn delay={0.1}>
      <div>
        <p className="text-xs uppercase tracking-widest text-accent mb-6">
          Founder
        </p>
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          Sunny Hasija
        </h3>
        <p className="text-text-secondary leading-relaxed max-w-2xl">
          PhD in Supply Chain Management, studies AI behavior, organizational
          adoption, negotiation dynamics, and decision governance. His work
          informs Codecision&apos;s advisory methodology.
        </p>
      </div>
    </AnimateIn>
  );
}
