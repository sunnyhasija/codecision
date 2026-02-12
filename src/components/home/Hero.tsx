"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL, CALENDLY_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base md:text-lg text-text-secondary max-w-prose leading-[1.8]"
        >
          AI deployment failures rarely come from model capability. They come
          from misalignment between task structure, model behavior, and
          organizational context.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 text-base md:text-lg text-text-secondary max-w-prose leading-[1.8]"
        >
          Codecision advises organizations evaluating AI in supply chain and
          operational decision systems &mdash; focusing on behavioral risk, role
          asymmetry, and deployment discipline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center gap-5"
        >
          <Button href={CALENDLY_URL} external>
            Schedule a conversation
          </Button>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-text-muted hover:text-accent transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
