/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tomato-gradiant": "linear-gradient(#E65895, #BC6BE8)",
        primary: {
          darker: "#393F6E",
          "less-dark": "#343964",
        },
        "cold-tomato": "#DD524C",
        dodger: "#3E9FFF",
        light: {
          smoky: "#FFECC8",
          lighter: "#E2E4F3",
        },
        "cold-gray": "#8B8EAB",
      },
      fontFamily: {
        "be-vietnam-pro": ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
}
