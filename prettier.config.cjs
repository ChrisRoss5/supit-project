/* https://prettier.io/docs/en/options.html */
/* https://github.com/tailwindlabs/prettier-plugin-tailwindcss */

module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: "tailwind.config.cjs",
  singleQuote: false,
};
