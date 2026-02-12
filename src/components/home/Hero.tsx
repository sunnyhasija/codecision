"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent" />

      <div className="mx-auto max-w-content px-6 pt-24 pb-16 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display-sm md:text-display font-bold tracking-tight max-w-3xl"
        >
          AI deployment is not about capability. It is about strategic fit.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed"
        >
          Codecision is a research-backed advisory for organizations evaluating
          AI-enabled decision systems in supply chain and operational contexts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/contact">Book a conversation</Button>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-text-muted hover:text-text-secondary transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
