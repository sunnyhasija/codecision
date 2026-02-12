"use client";

import { motion } from "framer-motion";
import { AmbientOrbs } from "@/components/ui/AmbientOrbs";
import { CALENDLY_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-navy overflow-hidden">
      <AmbientOrbs />

      {/* Center text */}
      <div className="flex-1 flex items-center px-8 md:px-12 relative z-10">
        <div className="w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[15vw] md:text-hero uppercase leading-[0.85] tracking-tighter"
          >
            <span className="text-white">Deploy</span>
            <br />
            <span className="text-outline">With Rigor</span>
          </motion.h1>
        </div>
      </div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="px-8 md:px-12 pb-12 flex items-end justify-between relative z-10"
      >
        <p className="text-[12px] uppercase tracking-[0.15em] text-taupe max-w-[320px] leading-relaxed font-light">
          Research-backed advisory for organizations deploying AI in supply
          chain and operational decisions.
        </p>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full border border-sage/40 flex items-center justify-center hover:border-sage transition-all duration-500 ease-luxe group"
        >
          <svg
            className="w-5 h-5 text-sage transition-transform duration-500 ease-luxe group-hover:translate-y-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
