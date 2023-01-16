import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import store from "./store";
import { Provider } from "react-redux";
import "./style/style.css";

export const $image = (url: string, folder?: string) =>
  new URL(`./assets/${folder || "img"}/${url}`, import.meta.url).href;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
