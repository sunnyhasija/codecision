import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const research = [
  {
    title: "AI Trust Research",
    source: "Journal of Business Logistics, 2022",
    description:
      "Investigates organizational acceptance and trust dynamics in AI.",
  },
  {
    title: "Role-Based Asymmetry Research",
    source: null,
    description:
      "Experimental analysis of negotiation outcomes under role assignment.",
  },
  {
    title: "SCM-Arena Behavioral Benchmark",
    source: null,
    description:
      "Evaluation of AI behavior under dynamic supply chain decision conditions.",
  },
];

export function ResearchPreview() {
  return (
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          title="Research & Capability"
          subtitle="Codecision's advisory work is informed by active research and large-scale evaluation."
        />

        <div className="space-y-6">
          {research.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.1}>
              <div className="border-l-2 border-accent/30 pl-6 py-2">
                <p className="font-semibold text-text-primary">{item.title}</p>
                {item.source && (
                  <p className="text-xs text-accent mt-1">{item.source}</p>
                )}
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3}>
          <p className="mt-10 text-text-secondary italic">
            Research informs advisory. Advisory remains disciplined.
          </p>
          <div className="mt-6">
            <Button href="/research" variant="secondary">
              View research
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
