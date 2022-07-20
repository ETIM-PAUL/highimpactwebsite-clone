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

// app.use(router);
app.use(router);
app.use(plugin, defaultConfig);
app.use(pinia);
app.directive("click-outside", {
  bind: function (element, binding, vnode) {
    element.clickOutsideEvent = function (event) {
      //  check that click was outside the el and his children
      if (!(element === event.target || element.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
        // binding.value(); run the arg
      }
    };
    document.body.addEventListener("click", element.clickOutsideEvent);
  },
  unbind: function (element) {
    document.body.removeEventListener("click", element.clickOutsideEvent);
  },
});
export const store = useCartStore(pinia);
export const link = useLink(pinia);
export const euro = (value) =>
  currency(value, {
    symbol: "£",
    decimal: ".",
    separator: ",",
  });

app.mount("#app");
