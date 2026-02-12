import { AnimateIn } from "@/components/ui/AnimateIn";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="bg-swiss-muted py-24 md:py-32 px-8 md:px-12 relative">
      <div className="absolute inset-0 swiss-diagonal pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-8">
            <AnimateIn>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-8">
                <span className="text-swiss-accent">04.</span> Next Step
              </p>
              <h2 className="font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9]">
                30 Minutes<span className="text-swiss-accent">.</span>
                <br />
                No Pitch,
                <br />
                No Deck<span className="text-swiss-accent">.</span>
              </h2>
            </AnimateIn>
          </div>

          <div className="md:col-span-4 md:pt-16">
            <AnimateIn delay={0.1}>
              <p className="text-sm md:text-base font-medium leading-relaxed mb-8">
                A structured discussion about where AI does or doesn&apos;t
                make sense for your operations.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold uppercase tracking-widest bg-black text-white px-8 py-4 hover:bg-swiss-accent transition-colors duration-200 text-center"
                >
                  Schedule a Conversation
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[11px] font-bold uppercase tracking-widest border-2 border-black px-8 py-4 hover:bg-black hover:text-white transition-colors duration-200 text-center"
                >
                  Email Us
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
