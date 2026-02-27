/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f5efe4",
        gold: "#b88a44",
        espresso: "#2f241c",
        cocoa: "#4e3b2f",
        sand: "#d9c6a5"
      },
      boxShadow: {
        luxe: "0 15px 40px -18px rgba(47, 36, 28, 0.55)",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Source Sans 3'", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(120deg, rgba(47,36,28,0.92), rgba(184,138,68,0.55))",
      },
    },
  },
  plugins: [],
};
