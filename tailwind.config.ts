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
        navy: "#171e19",
        sage: "#b7c6c2",
        taupe: "#9f8d8b",
        beige: "#d7c5b2",
        cyan: "#d5f4f9",
        "soft-blue": "#bbe2f5",
        charcoal: "#302b2f",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["18vw", { lineHeight: "0.85" }],
        "massive": ["9rem", { lineHeight: "0.9" }],
        "huge": ["7rem", { lineHeight: "0.9" }],
        "big": ["5rem", { lineHeight: "0.95" }],
      },
      maxWidth: {
        content: "80rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
