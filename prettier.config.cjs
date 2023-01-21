/* https://prettier.io/docs/en/options.html */
/* https://github.com/tailwindlabs/prettier-plugin-tailwindcss */

module.exports = {
  singleQuote: false,
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("prettier-plugin-svelte"),
  ],
  tailwindConfig: "tailwind.config.cjs",
  pluginSearchDirs: ["."],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
