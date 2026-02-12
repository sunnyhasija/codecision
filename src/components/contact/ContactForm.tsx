"use client";

import { useState, FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Inquiry from ${form.name}${form.org ? ` (${form.org})` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.org || "N/A"}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    "w-full bg-surface border border-border rounded px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">
          Name *
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClasses}
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">
          Email *
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClasses}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">
          Organization
        </label>
        <input
          type="text"
          value={form.org}
          onChange={(e) => setForm({ ...form, org: e.target.value })}
          className={inputClasses}
          placeholder="Company or institution"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">
          Message *
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClasses} resize-none`}
          placeholder="How can we help?"
        />
      </div>

      <p className="text-xs text-text-muted">
        This will open your default email client.
      </p>

      <button
        type="submit"
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded bg-accent hover:bg-accent-hover text-white transition-all duration-200"
      >
        Send message
      </button>
    </form>
  );
}
