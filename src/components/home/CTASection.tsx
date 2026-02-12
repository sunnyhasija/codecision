import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL, CALENDLY_URL } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-content px-6">
        <AnimateIn>
          <h2 className="text-heading font-semibold tracking-tight text-text-primary">
            Contact
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Begin with a structured conversation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={CALENDLY_URL}>Schedule a call</Button>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-text-muted hover:text-text-secondary transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
