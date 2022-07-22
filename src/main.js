import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { plugin, defaultConfig } from "@formkit/vue";
import "./index.css";
import { createPinia } from "pinia";
import currency from "currency.js";
import { useCartStore, useLink } from "./state/store";
const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(plugin, defaultConfig);
app.use(pinia);

export const store = useCartStore(pinia);
export const link = useLink(pinia);
export const euro = (value) =>
  currency(value, {
    symbol: "£",
    decimal: ".",
    separator: ",",
  });

app.mount("#app");
