/**
 * Tailwind CSS configuration with custom terracotta colors
 * Extends default theme with professional color palette
 */

import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        "red-terracotta": "#D2691E",
        "red-terracotta-light": "#E6A76B",
        "red-terracotta-dark": "#B8541A",
        "lime-terracotta": "#8FBC8F",
        "lime-terracotta-light": "#A8D4A8",
        "lime-terracotta-dark": "#7A9F7A",
        "blue-terracotta": "#708090",
        "blue-terracotta-light": "#9BB0C1",
        "blue-terracotta-dark": "#5A6B7A",
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 4s infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
