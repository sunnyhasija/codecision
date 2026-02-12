import { AnimateIn } from "@/components/ui/AnimateIn";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="bg-charcoal py-32 md:py-48 px-8 md:px-12 relative overflow-hidden">
      {/* Decorative quote */}
      <div className="absolute top-0 left-12 font-display text-[30rem] text-navy/30 leading-none select-none pointer-events-none hidden md:block">
        &ldquo;
      </div>

      <div className="max-w-content mx-auto relative z-10">
        <AnimateIn>
          <h2 className="font-display text-3xl md:text-big uppercase tracking-tight text-white leading-[1]">
            30 Minutes. No pitch,
            <br />
            no deck. A structured
            <br />
            discussion about where
            <br />
            AI does or doesn&apos;t
            <br />
            make sense.
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] uppercase tracking-[0.2em] text-white border border-white px-8 py-4 transition-all duration-500 ease-luxe hover:bg-white hover:text-navy"
            >
              Schedule a Conversation
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[12px] uppercase tracking-[0.2em] text-taupe hover:text-sage transition-colors duration-300"
            >
              Email us
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
