import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import path from "path";

/* https://kit.svelte.dev/docs/adapter-static#spa-mode */
/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      fallback: "index.html",
      pages: "dist",
    }),
    alias: {
      "@": path.resolve("./src"),
    },
    prerender: { entries: [] },
    /* todo outDir: "dist", */
  },
};

export default config;
