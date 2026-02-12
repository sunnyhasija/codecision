import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { CalendlyEmbed } from "@/components/contact/CalendlyEmbed";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Codecision. Schedule a call or send a message.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          title="Let's talk about your AI deployment needs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <AnimateIn>
            <ContactForm />
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="space-y-8">
              <CalendlyEmbed />

              <div className="border border-border rounded-lg p-8 bg-surface">
                <p className="text-xs uppercase tracking-widest text-text-muted mb-3">
                  Email directly
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </div>
  );
}
