import { AnimateIn } from "./AnimateIn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <AnimateIn className="mb-16">
      {label && (
        <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-4">
          {label}
        </p>
      )}
      <h2 className="text-heading font-semibold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-text-secondary max-w-prose leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimateIn>
  );
}
