import Link from "next/link";
import { NAV_LINKS, CONTACT_EMAIL, CALENDLY_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t-4 border-black">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: Big type */}
          <div className="md:col-span-7">
            <p className="font-black text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9]">
              Let&apos;s
              <br />
              Talk<span className="text-swiss-accent">.</span>
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-[11px] font-bold uppercase tracking-widest bg-black text-white px-8 py-4 hover:bg-swiss-accent transition-colors duration-200"
            >
              Schedule a Conversation
            </a>
          </div>

          {/* Right: Links + contact */}
          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-black/40 mb-4">
                Navigation
              </p>
              <div className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium hover:text-swiss-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-black/40 mb-4">
                Contact
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm font-medium hover:text-swiss-accent transition-colors duration-200"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-2 border-black">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-4 flex items-center justify-between">
          <p className="text-[11px] font-medium uppercase tracking-widest text-black/40">
            &copy; {new Date().getFullYear()} Codecision LLC
          </p>
          <p className="text-[11px] font-medium uppercase tracking-widest text-black/40">
            Grand Rapids, MI
          </p>
        </div>
      </div>
    </footer>
  );
}
