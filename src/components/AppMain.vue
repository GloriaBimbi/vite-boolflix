<script>
import { store } from "../store/index";
import AppCard from "./AppCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    fetchMovieTitle() {
      axios
        .get(store.apiUriMovies + store.movieTitle)
        .then((response) => {
          store.resultMovies = response.data.results.map((result) => {
            return {
              title: result.title,
              original_title: result.original_title,
              language: result.original_language,
              vote: result.vote_average,
              poster_path: result.poster_path,
              id: result.id,
            };
          });
          console.log(response.data.results);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    fetchTvSerieTitle() {
      axios
        .get(store.apiUriTvSeries + store.movieTitle)
        .then((response) => {
          store.resultTvSeries = response.data.results.map((result) => {
            return {
              title: result.name,
              original_title: result.original_name,
              language: result.original_language,
              vote: result.vote_average,
              poster_path: result.poster_path,
              id: result.id,
            };
          });
          console.log(response.data.results);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    searchTitle() {
      if (store.movieTitle != "") {
        this.fetchMovieTitle();
        this.fetchTvSerieTitle();
      } else {
        alert(
          "ERRORE: per avviare la ricerca devi inserire almeno un carattere"
        );
      }
      store.movieTitle = "";
    },
  },

  components: { AppCard },
};
</script>
<template>
  <div class="container">
    <div class="col-auto">
      <input
        @keyup.enter="searchTitle()"
        v-model="store.movieTitle"
        type="text"
        class="form-control"
        placeholder="Harry Potter"
      />
    </div>
    <div class="col-auto">
      <button @click="searchTitle()" type="submit" class="btn btn-primary mb-3">
        Search
      </button>
    </div>
    <app-card
      v-for="(card, index) in store.resultMovies"
      :card="card"
      :index="index"
      :key="card.id"
    ></app-card>
    <app-card
      v-for="(card, index) in store.resultTvSeries"
      :card="card"
      :index="index"
      :key="card.id"
    ></app-card>
  </div>
</template>
<style lang="scss" scoped></style>
