"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL, CALENDLY_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="pt-40 pb-20 md:pt-48 md:pb-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-display-sm md:text-display font-semibold tracking-tight max-w-2xl text-text-primary"
        >
          Most AI deployments fail before the model does.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 text-base md:text-lg text-text-secondary max-w-prose leading-[1.8]"
        >
          The failure is rarely capability. It is misalignment between task
          structure, model behavior, and organizational context. Codecision
          advises organizations evaluating AI in supply chain and operational
          decision systems, grounded in published research and large-scale
          behavioral evaluation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <Button href={CALENDLY_URL} external>
            Schedule a conversation
          </Button>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            Email us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
