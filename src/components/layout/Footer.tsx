import Link from "next/link";
import { NAV_LINKS, CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-content px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div>
            <p className="font-serif text-lg text-text-primary">Codecision</p>
            <p className="mt-3 text-sm text-text-muted max-w-xs leading-relaxed">
              Research-backed advisory for AI-enabled decision systems.
            </p>
          </div>

          <div className="flex gap-20">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted mb-5">
                Pages
              </p>
              <div className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted mb-5">
                Contact
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-text-muted hover:text-accent transition-colors duration-300"
              >
                Email us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-border/30">
          <p className="text-xs text-text-muted/60">
            &copy; {new Date().getFullYear()} Codecision LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
