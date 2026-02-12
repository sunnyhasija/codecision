import Link from "next/link";
import { NAV_LINKS, CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Wordmark + tagline */}
          <div>
            <p className="font-semibold tracking-[0.2em] text-sm uppercase text-text-primary">
              Codecision
            </p>
            <p className="mt-3 text-sm text-text-muted leading-relaxed">
              Research-backed advisory for AI-enabled decision systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-wider text-text-muted mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-2">
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

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-wider text-text-muted mb-4">
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

        <div className="mt-16 pt-6 border-t border-border">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Codecision LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
