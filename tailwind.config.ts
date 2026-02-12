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
        background: "#0c0f14",
        "surface": "#141820",
        "surface-light": "#1a1f2a",
        border: "#262b36",
        "text-primary": "#e8e6e1",
        "text-secondary": "#9a978f",
        "text-muted": "#5e5c57",
        accent: "#c9a87c",
        "accent-hover": "#dbbf99",
        "accent-dim": "rgba(201, 168, 124, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-sm": [
          "2.5rem",
          { lineHeight: "1.12", letterSpacing: "-0.015em" },
        ],
        heading: ["1.75rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        subheading: ["1.125rem", { lineHeight: "1.7" }],
      },
      maxWidth: {
        content: "64rem",
        prose: "38rem",
      },
    },
  },
  plugins: [],
};
export default config;
