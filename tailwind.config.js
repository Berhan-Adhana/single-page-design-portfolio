/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EB7565",
        glanticBlue: "#755CDE",
        summerYellow: "#F6A560",
        cyan: "#61C4B7",
        black: "#030303",
        lightBrown: "#7A746E",
        purple: "#552049",
        lightPink: "#F39E9E",
        white: "#FFF7F0",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
