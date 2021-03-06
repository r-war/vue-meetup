import moment from "moment";
import Vue from "vue";

import App from "./App.vue";
import AppDropdown from "./components/shared/AppDropdown";
import AppHero from "./components/shared/AppHero";
import router from "./router";

Vue.config.productionTip = false;

Vue.component("AppHero", AppHero);
Vue.component("AppDropdown", AppDropdown);

Vue.filter("capitalize", function (value) {
  if (value && typeof value === "string") {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  return "";
});

Vue.filter("formatDate", function (value, formatType = "LL") {
  if (!value) return "";

  return moment(value).format(formatType);
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
