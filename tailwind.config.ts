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
        ink: "#17201a",
        moss: "#44624a",
        mint: "#e7f2e8",
        clay: "#c36f4a",
        oat: "#f6f1e8",
        line: "#d9ddcf"
      },
      boxShadow: {
        soft: "0 12px 40px rgba(23, 32, 26, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
