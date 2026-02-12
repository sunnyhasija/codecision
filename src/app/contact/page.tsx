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
    <section className="bg-white min-h-screen pt-32 md:pt-40 pb-24 px-8 md:px-12 relative">
      <div className="absolute inset-0 swiss-grid-pattern pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <AnimateIn>
          <p className="text-[11px] font-bold uppercase tracking-widest text-swiss-accent mb-8">
            Contact
          </p>
          <h1 className="font-black text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.85]">
            Start A
            <br />
            Conversation<span className="text-swiss-accent">.</span>
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <p className="mt-10 text-sm md:text-base font-medium leading-relaxed max-w-lg">
            If you&apos;re evaluating AI for supply chain or operational
            decisions and want a structured, independent perspective, reach out.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold uppercase tracking-widest bg-black text-white px-8 py-4 hover:bg-swiss-accent transition-colors duration-200"
            >
              Schedule a Conversation
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[11px] font-bold uppercase tracking-widest border-2 border-black px-8 py-4 hover:bg-black hover:text-white transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="mt-16 pt-12 border-t-2 border-black">
            <p className="text-sm text-black/60">
              Or email directly:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-black font-medium hover:text-swiss-accent transition-colors duration-200"
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
