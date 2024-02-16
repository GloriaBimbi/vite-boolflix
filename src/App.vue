<script>
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";
import AppModal from "./components/AppModal.vue";

import { store } from "./store/index";
import axios from "axios";
export default {
  data() {
    return {
      store,
    };
  },
  components: { AppMain, AppHeader, AppModal },
};
</script>

<template>
  <app-header />
  <app-modal v-if="store.modal.show" />

  <app-main />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
