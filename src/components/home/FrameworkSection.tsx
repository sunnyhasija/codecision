"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";

const capabilities = [
  {
    title: "Behavioral Evaluation",
    desc: "How does the AI actually make decisions under uncertainty, partial information, and conflicting signals? We test it.",
  },
  {
    title: "Decision System Audit",
    desc: "Structured assessment of where AI fits in your operational decision architecture, and where it does not.",
  },
  {
    title: "Deployment Readiness",
    desc: "Go/no-go framework for AI deployment based on behavioral evidence, not vendor promises.",
  },
  {
    title: "Research Translation",
    desc: "Peer-reviewed findings translated into actionable protocols for your operations team.",
  },
];

export function FrameworkSection() {
  return (
    <section className="bg-white py-24 md:py-32 px-8 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <AnimateIn>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-12">
            <span className="text-swiss-accent">02.</span> Capabilities
          </p>
          <h2 className="font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] max-w-4xl">
            What We
            <br />
            Do<span className="text-swiss-accent">.</span>
          </h2>
        </AnimateIn>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 border-t-2 border-l-2 border-black">
          {capabilities.map((cap, i) => (
            <AnimateIn key={cap.title} delay={0.05 * (i + 1)}>
              <div className="border-b-2 border-r-2 border-black p-8 md:p-12 group hover:bg-black hover:text-white transition-colors duration-200 cursor-default h-full">
                <p className="text-[11px] font-bold uppercase tracking-widest text-swiss-accent mb-4">
                  0{i + 1}
                </p>
                <h3 className="font-black text-2xl md:text-3xl uppercase tracking-tight mb-4">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-black/60 group-hover:text-white/70 transition-colors duration-200">
                  {cap.desc}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
