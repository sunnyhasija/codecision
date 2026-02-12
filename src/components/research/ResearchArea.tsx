import { AnimateIn } from "@/components/ui/AnimateIn";

interface ResearchAreaProps {
  title: string;
  description: string;
  index: number;
}

export function ResearchArea({ title, description, index }: ResearchAreaProps) {
  return (
    <AnimateIn delay={index * 0.1}>
      <div className="border border-border rounded-lg p-8 bg-surface">
        <p className="text-xs text-accent font-mono mb-4">
          Research Area {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>
    </AnimateIn>
  );
}
