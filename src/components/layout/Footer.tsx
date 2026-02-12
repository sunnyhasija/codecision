import Link from "next/link";
import { NAV_LINKS, CONTACT_EMAIL, CALENDLY_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy pt-32 pb-12">
      <div className="px-8 md:px-12">
        {/* Massive CTA */}
        <div className="mb-20">
          <h2 className="font-display text-6xl md:text-massive uppercase tracking-tighter text-white">
            Let&apos;s Talk
          </h2>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 font-display text-2xl md:text-4xl text-sage underline underline-offset-8 decoration-sage/40 hover:decoration-sage transition-all duration-500 ease-luxe uppercase tracking-wide"
          >
            Schedule a Conversation
          </a>
          <div className="mt-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[12px] uppercase tracking-[0.2em] text-taupe hover:text-sage transition-colors duration-300"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[12px] uppercase tracking-[0.2em] text-white/40">
            &copy; {new Date().getFullYear()} Codecision LLC
          </p>
          <div className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] uppercase tracking-[0.2em] text-white/40 hover:text-white/70 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
