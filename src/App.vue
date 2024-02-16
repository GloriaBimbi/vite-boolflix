<script>
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";

import { store } from "./store/index";
import axios from "axios";
export default {
  data() {
    return {
      store,
    };
  },
  components: { AppMain, AppHeader },
};
</script>

<template>
  <div class="container">
    <app-header></app-header>
    <app-main></app-main>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
