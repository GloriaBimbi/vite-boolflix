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
      store.myMovieIndex = productIndex;
      const selectedMovie = store.resultMovies[store.myMovieIndex];

      //controllo che l'indice esista e nel caso collego la modale cliccata con le sue chiavi nello store
      if (productIndex >= 0) {
        productIndex = store.myItemIndex;

        store.modal.srcPoster = selectedMovie.poster_path;
        store.modal.scrBackdrop = selectedMovie.backdrop_path;
        store.modal.title = selectedMovie.title;
        store.modal.originalTitle = selectedMovie.original_title;
        store.modal.language = selectedMovie.language;
        store.modal.vote = selectedMovie.vote;
        store.modal.overview = selectedMovie.overview;
        //faccio in modo che cliccando su una card si apra la modale
        store.modal.show = true;
      }
    },
    handleModelOpeningForTvSeries(productIndex) {
      store.myTvSerieIndex = productIndex;
      const selectedTvSerie = store.resultTvSeries[store.myTvSerieIndex];

      //controllo che l'indice esista e nel caso collego la modale cliccata con le sue chiavi nello store
      if (productIndex >= 0) {
        store.modal.srcPoster = selectedTvSerie.poster_path;
        store.modal.scrBackdrop = selectedTvSerie.backdrop_path;
        store.modal.title = selectedTvSerie.title;
        store.modal.originalTitle = selectedTvSerie.original_title;
        store.modal.language = selectedTvSerie.language;
        store.modal.vote = selectedTvSerie.vote;
        store.modal.overview = selectedTvSerie.overview;
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
    <div v-if="store.showMovies" class="section-movies">
      <h2>FILM</h2>
      <div class="slider">
        <div class="card-element">
          <app-card
            v-for="(card, index) in store.resultMovies"
            :card="card"
            :index="index"
            :key="card.id"
            @open-model="handleModelOpeningForMovies"
          />
        </div>
      </div>
    </div>
    <div v-if="store.showTvSeries" class="section-tv-series">
      <h2>SERIE TV</h2>
      <div class="slider">
        <div class="card-element">
          <app-card
            v-for="(card, index) in store.resultTvSeries"
            :card="card"
            :index="index"
            :key="card.id"
            @open-model="handleModelOpeningForTvSeries"
          />
        </div>
      </div>
    </div>
    <div v-if="store.showMyList" class="section-tv-series">
      <h2>LA MIA LISTA</h2>
      <div class="slider">
        <div class="card-element">
          <app-card
            v-for="(card, index) in store.myList"
            :card="card"
            :index="index"
            :key="card.id"
            @open-model="handleModelOpeningForTvSeries"
          />
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;

main {
  height: calc(100vh - 80px);
  background-color: rgb(28, 27, 27);
  padding: 17px;
  overflow: scroll;
  display: flex;
  flex-direction: column;

  h2 {
    color: white;
    font-size: 25px;
    width: 170px;
    padding-top: 20px;
    align-self: flex-start;
  }

  .card-element {
    @include align("vertical");
    justify-content: flex-start;
    overflow: scroll;
    gap: 10px;
  }

  .slider {
    width: 80%;
    height: 231px;
    overflow: scroll;
    position: relative;
  }

  .section-movies,
  .section-tv-series {
    @include align("vertical");
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
  }

  .section-movies {
    margin-bottom: 10px;
  }
}
</style>
