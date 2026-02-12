"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, CONTACT_EMAIL } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <nav className="px-8 md:px-12 py-8 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl tracking-widest uppercase text-white"
        >
          Codecision
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] uppercase tracking-[0.2em] text-white transition-opacity duration-300 hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[12px] uppercase tracking-[0.2em] text-white border border-white px-5 py-2.5 transition-all duration-500 ease-luxe hover:bg-white hover:text-navy"
          >
            Get in Touch
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[12px] uppercase tracking-[0.2em] text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 bg-navy z-40 flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-4xl uppercase tracking-wider text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 text-[12px] uppercase tracking-[0.2em] text-white border border-white px-5 py-2.5"
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
