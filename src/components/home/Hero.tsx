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
          The failure is rarely capability. It is misalignment between task
          structure, model behavior, and organizational context. Codecision
          advises organizations evaluating AI in supply chain and operational
          decision systems, grounded in published research and large-scale
          behavioral evaluation.
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
