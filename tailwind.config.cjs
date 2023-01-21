/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
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
