import Vue from "vue";
import Vuesax from "vuesax";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store } from "./store";

import i18n from "@/localization/localization";

import "vuesax/dist/vuesax.css";
import "@/styles/main.scss";
import "material-design-icons/iconfont/material-icons.css";

Vue.use(Vuesax, {});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
