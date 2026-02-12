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
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-10">
            Contact
          </p>
          <h1 className="font-serif text-display-sm text-text-primary max-w-lg">
            Start a conversation.
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="mt-8 text-[15px] text-text-secondary max-w-prose leading-[1.85]">
            If you&apos;re evaluating AI for supply chain or operational
            decisions and want a structured, independent perspective, reach out.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="mt-12">
            <Button href={CALENDLY_URL} external>
              Schedule a conversation
            </Button>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="mt-12 pt-12 border-t border-border/50">
            <p className="text-[15px] text-text-secondary">
              Or email directly:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-accent hover:text-accent-hover transition-colors duration-300"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
