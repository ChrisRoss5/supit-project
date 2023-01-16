import { createApp } from "vue";
import "./style/style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$image = (url: string) =>
  new URL(`./assets/img/${url}`, import.meta.url).href;

app.use(pinia);
app.use(router);
app.mount("#app");

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $image: (url: string) => string;
  }
}
