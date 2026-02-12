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
        background: "#fafafa",
        surface: "#ffffff",
        border: "#e5e5e5",
        "text-primary": "#1a1a2e",
        "text-secondary": "#4a4a5a",
        "text-muted": "#8a8a9a",
        accent: "#1e3a5f",
        "accent-hover": "#2a4f7f",
        "accent-light": "#e8eef5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["3.25rem", { lineHeight: "1.12", letterSpacing: "-0.025em" }],
        "display-sm": [
          "2.25rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        heading: ["1.75rem", { lineHeight: "1.3", letterSpacing: "-0.015em" }],
        subheading: ["1.125rem", { lineHeight: "1.7" }],
      },
      maxWidth: {
        content: "64rem",
        prose: "40rem",
      },
    },
  },
  plugins: [],
};
export default config;
