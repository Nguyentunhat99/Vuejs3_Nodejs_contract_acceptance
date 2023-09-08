import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 
import bootstrap from "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.css"
import VueNumberFormat from "vue-number-format";

createApp(App)
  .use(bootstrap)
  .use(router)
  .use(VueNumberFormat, { prefix: "", decimal: ",", thousand: "." })
  .mount("#app");
