import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#111111",
        "surface-elevated": "#1a1a1a",
        border: "#262626",
        "text-primary": "#f5f5f5",
        "text-secondary": "#a3a3a3",
        "text-muted": "#737373",
        accent: "#6366f1",
        "accent-hover": "#818cf8",
        "accent-muted": "#4338ca",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": [
          "2.5rem",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        heading: ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        subheading: ["1.25rem", { lineHeight: "1.6" }],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
