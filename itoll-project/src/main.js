import { createApp } from "vue";
import App from "./layout/App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import dayjs from 'dayjs'
import { loadFonts } from "./plugins/webfontloader";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

loadFonts();

const app = createApp(App);
app.config.globalProperties.$dayjs = dayjs
app
  .use(router)
  .use(store)
  .use(vuetify)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
