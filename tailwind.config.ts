import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#00f5ff",
          purple: "#bd00ff",
          pink: "#ff006e",
          blue: "#3b82f6",
        },
        dark: {
          bg: "#0a0a0f",
          card: "#141420",
          border: "#1f1f2e",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "neon-gradient": "linear-gradient(135deg, #00f5ff 0%, #bd00ff 50%, #ff006e 100%)",
      },
      animation: {
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 3s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        glow: {
          "from": {
            textShadow: "0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff",
          },
          "to": {
            textShadow: "0 0 20px #bd00ff, 0 0 30px #bd00ff, 0 0 40px #bd00ff",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          "from": { opacity: "0", transform: "translateY(30px)" },
          "to": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
