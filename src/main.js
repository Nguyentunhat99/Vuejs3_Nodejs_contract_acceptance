import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import bootstrap from "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import VueNumberFormat from "vue-number-format";
import { store } from "./store";

const app = createApp(App);
app.use(store);
app.use(bootstrap);
app.use(router);
app.use(VueNumberFormat, { prefix: "", decimal: ",", thousand: "." });
app.mount("#app");
