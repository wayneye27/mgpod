import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#18181b",
        moss: "#52525b",
        mint: "#ecfdf5",
        clay: "#0f766e",
        oat: "#fafaf5",
        line: "#deded4"
      },
      boxShadow: {
        soft: "0 12px 40px rgba(23, 32, 26, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
