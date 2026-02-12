import { AnimateIn } from "@/components/ui/AnimateIn";

interface ServiceBlockProps {
  title: string;
  description: string;
  index: number;
}

export function ServiceBlock({ title, description, index }: ServiceBlockProps) {
  return (
    <AnimateIn delay={index * 0.1}>
      <div className="py-12 border-b border-border last:border-b-0">
        <div className="flex items-start gap-6">
          <span className="text-xs text-accent font-mono mt-1">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              {title}
            </h3>
            <p className="text-text-secondary leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
