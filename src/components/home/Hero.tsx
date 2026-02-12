"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end bg-white pt-16 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 swiss-grid-pattern pointer-events-none" />

      {/* Geometric composition - top right */}
      <div className="absolute top-24 right-8 md:right-12 w-40 md:w-72 aspect-square pointer-events-none">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 border-4 border-black" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-swiss-accent" />
        <div className="absolute top-[20%] left-[20%] w-2/5 aspect-square rounded-full border-4 border-black" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-8 md:px-12 pb-12 md:pb-20 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-[11px] font-bold uppercase tracking-widest text-swiss-accent mb-8"
        >
          Research-Backed AI Advisory
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0, 0, 0.2, 1] }}
          className="font-black text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] uppercase leading-[0.85] tracking-tighter"
        >
          Deploy
          <br />
          With
          <br />
          Rigor<span className="text-swiss-accent">.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t-2 border-black pt-8"
        >
          <p className="md:col-span-5 text-sm md:text-base font-medium leading-relaxed">
            For organizations deploying AI in supply chain and operational
            decisions. Built on peer-reviewed research and large-scale
            behavioral evaluation.
          </p>
          <div className="md:col-span-7 md:flex md:justify-end">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] font-bold uppercase tracking-widest bg-black text-white px-8 py-4 hover:bg-swiss-accent transition-colors duration-200"
            >
              Schedule a Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
