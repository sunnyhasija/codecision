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
          <p className="text-base text-text-secondary max-w-prose leading-[1.8]">
            If your organization is evaluating AI in decision-intensive
            environments, begin with a structured conversation.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Button href={CALENDLY_URL} external>
              Schedule a conversation
            </Button>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="mt-16 pt-12 border-t border-border">
            <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">
              Email
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              Email us
            </a>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
