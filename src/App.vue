<script>
import AppMain from "./components/AppMain.vue";
import { store } from "./store/index";
import axios from "axios";
export default {
  data() {
    return {
      store,
    };
  },
  components: { AppMain },
};
</script>

<template>
  <app-main></app-main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
