/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#081221",
        navy: "#0f1c33",
        slate: "#1b2b49",
        gold: "#c9a56a",
        pearl: "#e9eff8",
        mist: "#9dadc8",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      boxShadow: {
        luxe: "0 18px 60px -25px rgba(8, 18, 33, 0.6)",
      },
      backgroundImage: {
        aurora:
          "radial-gradient(circle at 20% 15%, rgba(201,165,106,0.22), transparent 35%), radial-gradient(circle at 85% 75%, rgba(39,63,104,0.45), transparent 45%), linear-gradient(160deg, #081221 0%, #0f1c33 55%, #142443 100%)",
      },
    },
  },
  plugins: [],
};
