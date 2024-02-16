<script>
import { store } from "../store/index";
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    handleModelOpening(productIndex) {
      //salvo una costante che faccia riferimento al pordotto selezionato per evitare di riscriverlo tutte le volte
      const selectedMovie = store.resultMovies[productIndex];
      //controllo che l'indice esista e nel caso collego la modale cliccata con le sue chiavi nello store
      if (productIndex) {
        store.modal.srcPoster = selectedCard.poster_path;
        store.modal.scrBackdrop = selectedCard.backdrop_path;
        store.modal.title = selectedCard.title;
        store.modal.originalTitle = selectedCard.original_title;
        store.modal.language = selectedCard.language;
        store.modal.vote = selectedCard.vote;
        //faccio in modo che cliccando su una card si apra la modale
        store.modal.show = true;
      }
    },
  },

  components: { AppCard },
};
</script>
<template>
  <main>
    <app-card
      v-for="(card, index) in store.resultMovies"
      :card="card"
      :index="index"
      :key="card.id"
      @open-model="handleModelOpening"
    />
    <app-card
      v-for="(card, index) in store.resultTvSeries"
      :card="card"
      :index="index"
      :key="card.id"
      @open-model="handleModelOpening"
    />
  </main>
</template>
<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;

main {
  height: calc(100vh - 80px);
  background-color: rgb(28, 27, 27);
  padding: 10px;

  @include align("vertical");
  justify-content: space-between;
  gap: 10px;
}
</style>
