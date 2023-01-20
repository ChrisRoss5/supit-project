import App from "./App.svelte";
import "./style/style.css";

export const getImage = (url: string, folder="img") =>
  new URL(`./assets/${folder}/${url}`, import.meta.url).href;

const app = new App({
  target: document.getElementById("app"),
});

export default app;
