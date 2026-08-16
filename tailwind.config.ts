import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E1420",
          soft: "#5B6472",
          faint: "#8A93A1",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          alt: "#F7F8FA",
        },
        line: {
          DEFAULT: "#E7E9EE",
          soft: "#F0F1F4",
        },
        brand: {
          50: "#EEF3FF",
          100: "#DCE6FF",
          200: "#B7CCFF",
          300: "#8CACFF",
          400: "#5C87F5",
          500: "#3A64E0",
          600: "#2A4BC4",
          700: "#22399C",
          800: "#1C2E79",
          900: "#182757",
        },
        signal: {
          teal: "#0EA5A0",
          cyan: "#22B8CF",
          amber: "#E0A62A",
        },
      },
      fontFamily: {
        display: ["'Sora'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(14,20,32,0.04), 0 8px 24px -12px rgba(14,20,32,0.10)",
        "card-hover": "0 4px 10px rgba(14,20,32,0.06), 0 16px 40px -14px rgba(14,20,32,0.16)",
        glow: "0 0 0 1px rgba(58,100,224,0.08), 0 12px 40px -8px rgba(58,100,224,0.25)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, #EEF0F4 1px, transparent 1px), linear-gradient(to bottom, #EEF0F4 1px, transparent 1px)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-40" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.8s cubic-bezier(0.2,0.6,0.4,1) infinite",
        float: "float 6s ease-in-out infinite",
        "dash-flow": "dash-flow 2s linear infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
