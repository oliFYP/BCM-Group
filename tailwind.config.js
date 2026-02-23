/*/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bcm: {
          red: "#c8161d",
          "red-dk": "#9e1015",
          "red-lt": "#e8353c",
          dark: "#0d0d0d",
          coal: "#161616",
          mid: "#1f1f1f",
          steel: "#2e2e2e",
          muted: "#5a5a5a",
          silver: "#909090",
          light: "#f2f2f2",
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', "sans-serif"],
        body: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
