"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-8 md:px-12 h-16">
        <Link
          href="/"
          className="font-black text-xl uppercase tracking-tight"
        >
          Codecision
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[11px] font-bold uppercase tracking-widest overflow-hidden group h-5 flex items-center ${
                pathname === link.href ? "text-swiss-accent" : "text-black"
              }`}
            >
              <span className="inline-block transition-transform duration-200 ease-out group-hover:-translate-y-full">
                {link.label}
              </span>
              <span className="absolute left-0 top-full text-swiss-accent transition-transform duration-200 ease-out group-hover:-translate-y-full">
                {link.label}
              </span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-[11px] font-bold uppercase tracking-widest bg-black text-white px-6 py-3 hover:bg-swiss-accent transition-colors duration-200 ease-out"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`h-0.5 bg-black transition-all duration-200 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-black transition-all duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-black transition-all duration-200 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-white border-t-2 border-black z-40">
          <div className="flex flex-col p-8 gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-4xl font-black uppercase tracking-tight hover:text-swiss-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 text-[11px] font-bold uppercase tracking-widest bg-black text-white px-6 py-3 w-fit hover:bg-swiss-accent transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
