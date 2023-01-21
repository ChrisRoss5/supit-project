/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        reset: "reset 1s forwards",
      },
      keyframes: {
        reset: {
          "100%": { transform: "none", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
