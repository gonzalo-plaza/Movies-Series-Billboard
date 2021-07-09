import VueI18n from "vue-i18n";
import Vue from "vue";

Vue.use(VueI18n);

import es from "./locales/locale.es";
import en from "./locales/locale.en";

const messages = {
  en,
  es,
};

const i18n = new VueI18n({
  locale: "en",
  messages,
});

export default i18n;
