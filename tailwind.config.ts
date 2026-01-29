import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blue Jays palette
        jays: {
          blue: "#134A8E",
          navy: "#1D2D5C",
          red: "#E8291C",
          light: "#4A90D9",
        },
        // Keep some warm tones
        cream: "#faf9f6",
        snow: "#f8fafc",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "wiggle": "wiggle 0.5s ease-in-out",
        "bounce-slow": "bounce 2s infinite",
        "snowfall": "snowfall 10s linear infinite",
        "snowfall-slow": "snowfall 15s linear infinite",
        "snowfall-fast": "snowfall 7s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        snowfall: {
          "0%": { transform: "translateY(-10vh) translateX(0)", opacity: "1" },
          "100%": { transform: "translateY(100vh) translateX(20px)", opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
