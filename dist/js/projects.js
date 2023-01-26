const jqueryTech =
  "JavaScript modules, jQuery + jQuery UI, Bootstrap + Bootstrap Icons";
const svelteTech =
  "Vite, TypeScript, PostCSS, Tailwind, Google Material Icons, Svelte + SvelteKit";
const vueTech =
  "Vite, TypeScript, PostCSS, Tailwind + HeadlessUI, Google Material Icons,<br>" +
  "Vue + Vue Router + Pinia";
const reactTech =
  "Vite, TypeScript, PostCSS, Tailwind + HeadlessUI, Google Material Icons,<br>" +
  "React + React Router + React Redux + React Transition Group";

export default [
  {
    name: "jquery",
    tech: jqueryTech,
    type: "Lazy Loaded · Resource Bytes: 169 KiB (418 KiB with jQueryUI), 5 files",
  },
  {
    name: "svelte",
    tech: svelteTech,
    type: "Lazy Loaded on hover · Resource Bytes: 72 KiB, 15 chunks",
  },
  {
    name: "vue",
    tech: vueTech,
    type: "Lazy Loaded · Resource Bytes: 171 KiB, 1 chunk",
  },
  {
    name: "vue-full",
    tech: vueTech,
    type: "Fully Loaded · Resource Bytes: 243 KiB, 1 chunk",
  },
  {
    name: "react",
    tech: reactTech,
    type: "Lazy Loaded · Resource Bytes: 233 KiB, 3 chunks",
  },
  {
    name: "react-full",
    tech: reactTech,
    type: "Fully Loaded · Resource Bytes: 312 KiB, 1 chunk",
  },
];
