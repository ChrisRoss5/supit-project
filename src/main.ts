import { createApp, reactive } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind-config";

const pinia = createPinia();
const app = createApp(App);
/* const fullConfig = resolveConfig(tailwindConfig);
const isBreakpointLg = window.matchMedia(
  `(min-width: ${(fullConfig as any).theme.screens.lg})`
);
app.config.globalProperties.$isBreakpoint = reactive({
  lg: isBreakpointLg.matches,
});
isBreakpointLg.addEventListener("change", (e) => {
  app.config.globalProperties.$isBreakpoint.lg = e.matches;
}); */

app.use(pinia);
app.use(router);
app.mount("#app");

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $isBreakpoint: { lg: boolean };
  }
}
