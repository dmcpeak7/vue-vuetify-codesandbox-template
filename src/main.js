import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

import About from "./components/About";
import Contact from "./components/Contact";
import Crew from "./components/Crew";
import Troubleshoot from "./components/Troubleshoot";

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: new VueRouter({
    routes: [
      { path: "/", component: About },
      { path: "/Contact", component: Contact },
      { path: "/Crew", component: Crew },
      { path: "/Troubleshoot", component: Troubleshoot }
      // Put your routes in here
    ]
  })
}).$mount("#app");
