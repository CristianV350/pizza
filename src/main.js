require("./css/style.css")
require("./css/normalize.css")
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
