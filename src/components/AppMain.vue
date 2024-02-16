<script>
import { store } from "../store/index";
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppCard },
};
</script>
<template>
  <app-card
    v-for="(card, index) in store.resultMovies"
    :card="card"
    :index="index"
    :key="card.id"
  />
  <app-card
    v-for="(card, index) in store.resultTvSeries"
    :card="card"
    :index="index"
    :key="card.id"
  />
</template>
<style lang="scss" scoped></style>
