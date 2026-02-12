import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="border-t border-border/50 pt-24 md:pt-32">
          <AnimateIn>
            <h2 className="font-serif text-heading text-text-primary max-w-lg">
              Start with a structured conversation.
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="mt-6 text-[15px] text-text-secondary max-w-prose leading-[1.85]">
              If your organization is evaluating AI for operational decisions,
              we can help assess fit, risk, and governance before you scale.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button href={CALENDLY_URL} external>
                Schedule a conversation
              </Button>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-text-muted hover:text-text-secondary transition-colors duration-300"
              >
                Email us
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
