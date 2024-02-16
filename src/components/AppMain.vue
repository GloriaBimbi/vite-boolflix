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
    handleModelOpeningForMovies(productIndex) {
      //salvo una costante che faccia riferimento al pordotto selezionato per evitare di riscriverlo tutte le volte
      const selectedMovie = store.resultMovies[productIndex];
      //controllo che l'indice esista e nel caso collego la modale cliccata con le sue chiavi nello store
      if (productIndex >= 0) {
        console.log(productIndex);

        store.modal.srcPoster = selectedMovie.poster_path;
        store.modal.scrBackdrop = selectedMovie.backdrop_path;
        store.modal.title = selectedMovie.title;
        store.modal.originalTitle = selectedMovie.original_title;
        store.modal.language = selectedMovie.language;
        store.modal.vote = selectedMovie.vote;
        //faccio in modo che cliccando su una card si apra la modale
        store.modal.show = true;
      }
    },
    handleModelOpeningForTvSeries(productIndex) {
      //salvo una costante che faccia riferimento al pordotto selezionato per evitare di riscriverlo tutte le volte
      const selectedTvSerie = store.resultMovies[productIndex];
      //controllo che l'indice esista e nel caso collego la modale cliccata con le sue chiavi nello store
      if (productIndex >= 0) {
        store.modal.srcPoster = selectedTvSerie.poster_path;
        store.modal.scrBackdrop = selectedTvSerie.backdrop_path;
        store.modal.title = selectedTvSerie.title;
        store.modal.originalTitle = selectedTvSerie.original_title;
        store.modal.language = selectedTvSerie.language;
        store.modal.vote = selectedTvSerie.vote;
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
      @open-model="handleModelOpeningForMovies"
    />
    <app-card
      v-for="(card, index) in store.resultTvSeries"
      :card="card"
      :index="index"
      :key="card.id"
      @open-model="handleModelOpeningForTvSeries"
    />
  </main>
</template>
<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;

main {
  height: calc(100vh - 80px);
  background-color: rgb(28, 27, 27);
  padding: 10px;
  overflow: scroll;

  @include align("vertical");
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
