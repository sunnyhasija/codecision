import { AnimateIn } from "@/components/ui/AnimateIn";

export function FirmSection() {
  return (
    <AnimateIn>
      <div className="border-b border-border pb-16 mb-16">
        <p className="text-xs uppercase tracking-widest text-accent mb-6">
          About the Firm
        </p>
        <h2 className="text-heading font-semibold tracking-tight text-text-primary mb-6">
          About Codecision
        </h2>
        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
          Codecision is a research-backed advisory focused on AI behavior in
          decision systems for organizational deployment.
        </p>
      </div>
    </AnimateIn>
  );
}
