import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      include: ["tailwind-config.cjs", "node_modules/**"],
    },
  },
  optimizeDeps: {
    include: ["tailwind-config"],
  },
  plugins: [vue()],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      "@": resolve(__dirname, "./src"),
      "tailwind-config": resolve(__dirname, "./tailwind.config.cjs"),
    },
  },
});
