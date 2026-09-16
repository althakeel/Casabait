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
        primary: "#0B3D2E",
        secondary: "#C9A24B",
        "neutral-dark": "#1A2421",
        "neutral-light": "#FAF7F2",
        background: "#FAF7F2",
        ivory: "#FAF7F2",
        charcoal: "#1A2421",
        surface: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 0 rgba(11, 61, 46, 0.06), 0 8px 32px rgba(11, 61, 46, 0.06)",
        "card-hover": "0 1px 0 rgba(201, 162, 75, 0.3), 0 16px 48px rgba(11, 61, 46, 0.1)",
        gold: "inset 0 0 0 1px rgba(201, 162, 75, 0.5)",
        elevated: "0 24px 64px rgba(26, 36, 33, 0.12)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(201, 162, 75, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 162, 75, 0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};
export default config;
