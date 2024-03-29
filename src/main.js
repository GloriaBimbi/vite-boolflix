import { createApp } from "vue";
import App from "./App.vue";
import * as bootstrap from "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faStar as faStarSolid,
  faBell,
  faMagnifyingGlass,
  faX,
  faAngleRight,
  faAngleLeft,
  faPlus,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

library.add(
  faStarSolid,
  faStarRegular,
  faBell,
  faMagnifyingGlass,
  faX,
  faAngleRight,
  faAngleLeft,
  faPlus,
  faPlay
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
