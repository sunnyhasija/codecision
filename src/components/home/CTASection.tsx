import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <AnimateIn>
          <p className="text-base text-text-secondary max-w-prose leading-[1.8]">
            If your organization is evaluating AI for operational decisions,
            start with a structured conversation about fit, risk, and
            governance.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Button href={CALENDLY_URL} external>
              Schedule a conversation
            </Button>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              Email us
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
