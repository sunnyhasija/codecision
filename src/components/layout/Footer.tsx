import Link from "next/link";
import { NAV_LINKS, CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <p className="font-semibold tracking-[0.15em] text-[13px] uppercase text-text-primary">
              Codecision
            </p>
            <p className="mt-3 text-sm text-text-muted max-w-xs leading-relaxed">
              Research-backed advisory for AI-enabled decision systems.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-text-muted mb-4">
                Pages
              </p>
              <div className="flex flex-col gap-2.5">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-widest text-text-muted mb-4">
                Contact
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-text-secondary hover:text-accent transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Codecision LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
