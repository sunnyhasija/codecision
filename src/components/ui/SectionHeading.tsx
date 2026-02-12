import { AnimateIn } from "./AnimateIn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <AnimateIn
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      <h2 className="text-heading font-semibold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-subheading text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimateIn>
  );
}
