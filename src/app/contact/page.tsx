import type { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL, CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Codecision about AI deployment in decision-intensive environments.",
};

export default function ContactPage() {
  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <AnimateIn>
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-8">
            Contact
          </p>
          <h1 className="font-serif text-display-sm text-text-primary max-w-lg">
            Start with a conversation.
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="mt-8 text-[15px] text-text-secondary max-w-prose leading-[1.85]">
            If your organization is evaluating AI in decision-intensive
            environments, a structured conversation is the right first step.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center gap-6">
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
  );
}
