import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070816",
        card: "rgba(255,255,255,0.06)",
        stroke: "rgba(255,255,255,0.12)",
      },
      boxShadow: {
        glow: "0 0 80px rgba(125, 95, 255, 0.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
