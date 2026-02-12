import type { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { CONTACT_EMAIL, CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Codecision about AI deployment in decision-intensive environments.",
};

export default function ContactPage() {
  return (
    <section className="bg-navy min-h-screen flex items-center px-8 md:px-12">
      <div className="max-w-content mx-auto w-full py-40">
        <AnimateIn>
          <p className="text-[12px] uppercase tracking-[0.2em] text-taupe mb-8">
            Contact
          </p>
          <h1 className="font-display text-5xl md:text-huge uppercase tracking-tighter text-white">
            Start a
            <br />
            <span className="text-outline">Conversation</span>
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="mt-10 text-[15px] text-sage/80 leading-[1.85] font-light max-w-lg">
            If you&apos;re evaluating AI for supply chain or operational
            decisions and want a structured, independent perspective, reach out.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] uppercase tracking-[0.2em] text-white border border-white px-8 py-4 transition-all duration-500 ease-luxe hover:bg-white hover:text-navy"
            >
              Schedule a Conversation
            </a>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.25}>
          <div className="mt-16 pt-12 border-t border-white/10">
            <p className="text-[15px] text-sage/60 font-light">
              Or email directly:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sage hover:text-white transition-colors duration-300"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
