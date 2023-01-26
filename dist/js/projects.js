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
    type: "Lazy Loaded",
  },
  {
    name: "svelte",
    tech: svelteTech,
    type: "Lazy Loaded On Hover",
  },
  {
    name: "vue",
    tech: vueTech,
    type: "Lazy Loaded",
  },
  {
    name: "vue-full",
    tech: vueTech,
    type: "Fully Loaded",
  },
  {
    name: "react",
    tech: reactTech,
    type: "Lazy Loaded",
  },
  {
    name: "react-full",
    tech: reactTech,
    type: "Fully Loaded",
  },
];
