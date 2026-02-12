import { CALENDLY_URL } from "@/lib/constants";

export function CalendlyEmbed() {
  return (
    <div className="border border-border rounded-lg p-8 bg-surface">
      <p className="text-xs uppercase tracking-widest text-accent mb-4">
        Prefer to talk?
      </p>
      <h3 className="text-xl font-semibold text-text-primary mb-3">
        Schedule a conversation
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed mb-6">
        Book a 30-minute introductory call to discuss your AI deployment
        questions.
      </p>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded border border-border hover:border-text-muted text-text-primary transition-all duration-200"
      >
        Book a call
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 17L17 7M17 7H7M17 7v10"
          />
        </svg>
      </a>
    </div>
  );
}
