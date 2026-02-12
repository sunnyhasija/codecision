import type { Metadata } from "next";
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
    <div className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        {/* Intro */}
        <AnimateIn>
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-10">
            About
          </p>
          <h1 className="font-serif text-display-sm text-text-primary">
            Sunny Hasija, PhD
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="mt-10 max-w-prose space-y-6">
            <p className="text-[15px] text-text-secondary leading-[1.85]">
              I&apos;m a faculty member at Grand Valley State University and
              hold a PhD in Logistics from The Ohio State University&apos;s
              Fisher College of Business, where my research focused on how AI
              systems behave in operational decision environments.
            </p>

            <p className="text-[15px] text-text-secondary leading-[1.85]">
              My published work, including peer-reviewed research on AI trust
              and adoption (<em>Journal of Business Logistics</em>, 2022) and
              the SCM-Arena behavioral benchmark, sits at the intersection of
              what AI can do in theory and what it actually does when
              organizations try to use it.
            </p>

            <p className="text-[15px] text-text-secondary leading-[1.85]">
              I started Codecision because the organizations evaluating AI for
              supply chain and operations decisions don&apos;t have access to
              the kind of rigorous, independent behavioral evaluation that the
              research community takes for granted. The vendors selling AI tools
              aren&apos;t going to stress-test their own products. Someone
              should.
            </p>
          </div>
        </AnimateIn>

        {/* Research & Credentials */}
        <AnimateIn delay={0.15}>
          <div className="mt-20 pt-20 border-t border-border/50 max-w-prose">
            <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-8">
              Research &amp; Credentials
            </p>

            <p className="text-[15px] text-text-secondary leading-[1.85]">
              <span className="text-text-primary font-medium">
                Research focus:
              </span>{" "}
              Behavioral evaluation of AI in supply chain decision systems. How
              LLMs make operational decisions under uncertainty, partial
              information, and stress. How organizations build (or fail to
              build) trust in AI tools.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <p className="text-sm font-medium text-text-primary">
                  SCM-Arena
                </p>
                <p className="mt-2 text-sm text-text-secondary leading-[1.8]">
                  A behavioral benchmark for LLM decision-making in supply
                  chains. 144 conditions, 5 replications, 52-round episodes.
                  Co-developed with Vincent Castillo (Ohio State).
                </p>
                <a
                  href="https://www.scm-arena.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-sm text-accent hover:text-accent-hover transition-colors duration-300"
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

              <div>
                <p className="text-sm font-medium text-text-primary">
                  &ldquo;In artificial intelligence (AI) we trust&rdquo;
                </p>
                <p className="mt-2 text-sm text-text-secondary leading-[1.8]">
                  A qualitative investigation of AI technology acceptance.{" "}
                  <em>Journal of Business Logistics</em>, 2022. With Terry Esper
                  (Ohio State).
                </p>
                <a
                  href="https://onlinelibrary.wiley.com/doi/10.1111/jbl.12301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-sm text-accent hover:text-accent-hover transition-colors duration-300"
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

              <div>
                <p className="text-sm text-text-muted">
                  ~90 citations on Google Scholar
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Links */}
        <AnimateIn delay={0.2}>
          <div className="mt-16 pt-16 border-t border-border/50">
            <div className="flex flex-wrap gap-6">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
