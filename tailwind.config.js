/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        gold: "#D4A574",
        lantern: "#C41E3A",
        teal: "#2EC4B6",
        cream: "#FFF8F0",
        sunset: "#FF6B35",
        navy: "#1A1A2E",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        script: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 24px 48px -16px rgba(26,26,46,0.28)",
        glow: "0 0 40px rgba(212,165,116,0.45)",
      },
    },
  },
  plugins: [],
};
