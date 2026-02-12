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
      {/* Hero */}
      <section className="bg-white pt-32 md:pt-40 pb-16 md:pb-24 px-8 md:px-12 border-b-2 border-black relative">
        <div className="absolute inset-0 swiss-grid-pattern pointer-events-none" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <AnimateIn>
            <p className="text-[11px] font-bold uppercase tracking-widest text-swiss-accent mb-8">
              About
            </p>
            <h1 className="font-black text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.85]">
              Sunny
              <br />
              Hasija<span className="text-swiss-accent">,</span>
              <br />
              PhD<span className="text-swiss-accent">.</span>
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Bio + photo */}
      <section className="bg-white py-16 md:py-24 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7">
            <AnimateIn>
              <div className="space-y-6">
                <p className="text-sm md:text-base font-medium leading-relaxed">
                  I&apos;m a faculty member at Grand Valley State University and
                  hold a PhD in Logistics from The Ohio State University&apos;s
                  Fisher College of Business, where my research focused on how
                  AI systems behave in operational decision environments.
                </p>
                <p className="text-sm md:text-base text-black/60 leading-relaxed">
                  My published work, including peer-reviewed research on AI
                  trust and adoption (
                  <em>Journal of Business Logistics</em>, 2022) and the
                  SCM-Arena behavioral benchmark, sits at the intersection of
                  what AI can do in theory and what it actually does when
                  organizations try to use it.
                </p>
                <p className="text-sm md:text-base text-black/60 leading-relaxed">
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

          <div className="md:col-span-4 md:col-start-9">
            <AnimateIn delay={0.1}>
              <div className="border-4 border-black">
                <Image
                  src="/headshot.jpg"
                  alt="Sunny Hasija"
                  width={400}
                  height={500}
                  className="w-full object-cover aspect-[4/5] grayscale"
                  priority
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="bg-swiss-muted py-16 md:py-24 px-8 md:px-12 border-t-2 border-black relative">
        <div className="absolute inset-0 swiss-dots pointer-events-none" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <AnimateIn>
            <p className="text-[11px] font-bold uppercase tracking-widest text-swiss-accent mb-8">
              Research &amp; Credentials
            </p>
            <p className="text-sm md:text-base leading-relaxed max-w-2xl">
              <span className="font-bold">Research focus:</span>{" "}
              Behavioral evaluation of AI in supply chain decision systems. How
              LLMs make operational decisions under uncertainty, partial
              information, and stress. How organizations build (or fail to
              build) trust in AI tools.
            </p>
          </AnimateIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 border-t-2 border-l-2 border-black">
            <AnimateIn delay={0.05}>
              <div className="border-b-2 border-r-2 border-black p-8 md:p-12 bg-white group hover:bg-black hover:text-white transition-colors duration-200 h-full">
                <h3 className="font-black text-2xl uppercase tracking-tight mb-4">
                  SCM-Arena
                </h3>
                <p className="text-sm text-black/60 group-hover:text-white/70 leading-relaxed transition-colors duration-200 mb-4">
                  A behavioral benchmark for LLM decision-making in supply
                  chains. 144 conditions, 5 replications, 52-round episodes.
                  Developed at Ohio State.
                </p>
                <a
                  href="https://www.scm-arena.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-swiss-accent"
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
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </a>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="border-b-2 border-r-2 border-black p-8 md:p-12 bg-white group hover:bg-black hover:text-white transition-colors duration-200 h-full">
                <h3 className="font-black text-2xl uppercase tracking-tight mb-4">
                  &ldquo;In AI We Trust&rdquo;
                </h3>
                <p className="text-sm text-black/60 group-hover:text-white/70 leading-relaxed transition-colors duration-200 mb-4">
                  A qualitative investigation of AI technology acceptance.{" "}
                  <em>Journal of Business Logistics</em>, 2022.
                </p>
                <a
                  href="https://onlinelibrary.wiley.com/doi/10.1111/jbl.12301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-swiss-accent"
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
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* Links */}
          <AnimateIn delay={0.15}>
            <div className="mt-12 pt-8 border-t-2 border-black flex flex-wrap gap-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold uppercase tracking-widest text-black/40 hover:text-swiss-accent transition-colors duration-200"
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
