import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import ArgonDashboard from "./plugins/argon-dashboard";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueResource from "vue-resource";

// var cors = require("cors");

// Vue.use(cors());

Vue.use(VueResource);
Vue.use(Vuetify);
Vue.config.productionTip = false;

Vue.use(ArgonDashboard);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
