"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL, CALENDLY_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="min-h-[85vh] flex items-end pb-24 md:pb-32 relative">
      <div className="mx-auto max-w-content px-6 lg:px-8 w-full">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-display-sm md:text-display tracking-tight max-w-2xl text-text-primary"
        >
          Most AI deployments fail
          <br />
          <span className="text-accent">before the model does.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-base text-text-secondary max-w-prose leading-[1.85]"
        >
          Codecision is a research-backed advisory for organizations deploying
          AI in supply chain and operational decisions. We evaluate how AI
          actually behaves in your decision environment, not how it scores on
          benchmarks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <Button href={CALENDLY_URL} external>
            Schedule a conversation
          </Button>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-text-muted hover:text-text-secondary transition-colors duration-300"
          >
            Email us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
