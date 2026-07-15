import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          50: "#F7F7F8",
          100: "#EDEDEF",
          200: "#D7D7DC",
          300: "#B4B4BD",
          400: "#8B8B96",
          500: "#68686F",
          600: "#4A4A50",
          700: "#333338",
          800: "#1D1D20",
          900: "#0F0F11",
          950: "#0A0A0B",
        },
        blue: {
          period: "#1B4B8F",
          light: "#2F6FED",
          pale: "#EAF1FF",
        },
        clay: "#C97B4A",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-display)", "sans-serif"],
        accent: ["var(--font-body-latin)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "cubist-grid":
          "linear-gradient(135deg, rgba(47,111,237,0.08) 25%, transparent 25%), linear-gradient(225deg, rgba(47,111,237,0.08) 25%, transparent 25%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shard: {
          "0%": { opacity: "0", transform: "scale(0.9) rotate(-4deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        shard: "shard 0.8s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
