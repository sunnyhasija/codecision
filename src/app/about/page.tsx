import type { Metadata } from "next";
import Image from "next/image";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sunny Hasija, PhD. Faculty at GVSU, PhD from Ohio State Fisher. Research on AI behavior in supply chain decision systems.",
};

const links = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=Vam6NJgAAAAJ",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ahasija",
  },
  {
    label: "SCM-Arena",
    href: "https://www.scm-arena.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/sunnyhasija",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-navy pt-40 pb-32 md:pt-48 md:pb-48 px-8 md:px-12">
        <div className="max-w-content mx-auto">
          <AnimateIn>
            <p className="text-[12px] uppercase tracking-[0.2em] text-taupe mb-8">
              About
            </p>
            <h1 className="font-display text-5xl md:text-huge uppercase tracking-tighter text-white">
              Sunny Hasija
              <span className="text-sage">, PhD</span>
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Bio + photo */}
      <section className="bg-white text-navy py-32 md:py-48 px-8 md:px-12">
        <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-7">
            <AnimateIn>
              <div className="space-y-6">
                <p className="text-[15px] text-navy/70 leading-[1.85] font-light">
                  I&apos;m a faculty member at Grand Valley State University and
                  hold a PhD in Logistics from The Ohio State University&apos;s
                  Fisher College of Business, where my research focused on how
                  AI systems behave in operational decision environments.
                </p>

                <p className="text-[15px] text-navy/70 leading-[1.85] font-light">
                  My published work, including peer-reviewed research on AI
                  trust and adoption (
                  <em>Journal of Business Logistics</em>, 2022) and the
                  SCM-Arena behavioral benchmark, sits at the intersection of
                  what AI can do in theory and what it actually does when
                  organizations try to use it.
                </p>

                <p className="text-[15px] text-navy/70 leading-[1.85] font-light">
                  I started Codecision because the organizations evaluating AI
                  for supply chain and operations decisions don&apos;t have
                  access to the kind of rigorous, independent behavioral
                  evaluation that the research community takes for granted. The
                  vendors selling AI tools aren&apos;t going to stress-test
                  their own products. Someone should.
                </p>
              </div>
            </AnimateIn>
          </div>

          <div className="md:col-span-4 md:col-start-9 relative">
            <AnimateIn delay={0.15}>
              {/* Decorative offset square */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-cyan/20 -z-10" />
              <Image
                src="/headshot.jpg"
                alt="Sunny Hasija"
                width={400}
                height={500}
                className="w-full object-cover aspect-[4/5] grayscale"
                priority
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Research section */}
      <section className="bg-[#fafafa] text-navy py-32 md:py-48 px-8 md:px-12">
        <div className="max-w-content mx-auto">
          <AnimateIn>
            <p className="text-[12px] uppercase tracking-[0.2em] text-taupe mb-8">
              Research &amp; Credentials
            </p>

            <p className="text-[15px] text-navy/70 leading-[1.85] font-light max-w-2xl">
              <span className="text-navy font-semibold">Research focus:</span>{" "}
              Behavioral evaluation of AI in supply chain decision systems. How
              LLMs make operational decisions under uncertainty, partial
              information, and stress. How organizations build (or fail to
              build) trust in AI tools.
            </p>
          </AnimateIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
            <AnimateIn delay={0.1}>
              <div className="border-b border-navy/10 pb-8">
                <p className="font-display text-xl uppercase tracking-tight text-navy">
                  SCM-Arena
                </p>
                <p className="mt-3 text-sm text-navy/60 leading-[1.8] font-light">
                  A behavioral benchmark for LLM decision-making in supply
                  chains. 144 conditions, 5 replications, 52-round episodes.
                  Developed at Ohio State.
                </p>
                <a
                  href="https://www.scm-arena.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 mt-4 text-sm text-navy hover:translate-x-2 transition-transform duration-500 ease-luxe"
                >
                  scm-arena.com
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </a>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="border-b border-navy/10 pb-8">
                <p className="font-display text-xl uppercase tracking-tight text-navy">
                  &ldquo;In AI We Trust&rdquo;
                </p>
                <p className="mt-3 text-sm text-navy/60 leading-[1.8] font-light">
                  A qualitative investigation of AI technology acceptance.{" "}
                  <em>Journal of Business Logistics</em>, 2022.
                </p>
                <a
                  href="https://onlinelibrary.wiley.com/doi/10.1111/jbl.12301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 mt-4 text-sm text-navy hover:translate-x-2 transition-transform duration-500 ease-luxe"
                >
                  View paper
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* Links */}
          <AnimateIn delay={0.2}>
            <div className="mt-16 pt-12 border-t border-navy/10 flex flex-wrap gap-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] uppercase tracking-[0.2em] text-navy/40 hover:text-navy transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
