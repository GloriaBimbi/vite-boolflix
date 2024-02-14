<!-- 5cf2112ddf23b3b71a19a74fcd05ae67 -->

<script>
import { store } from "./store/index";
import axios from "axios";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    searchTitle() {
      axios
        .get(store.apiUri + store.movieTitle)
        .then((response) => {
          store.results = response.data;
          console.log(store.results);
          console.log(response.data);
        })
        .catch((error) => {
          alert(error.message);
        });
      store.movieTitle = "";
    },
  },
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
    <ol v-for="result in store.results.results">
      <li>Titolo: {{ result.title }}</li>
      <li>Titolo Originale: {{ result.original_title }}</li>
      <li>Lingua: {{ result.original_language }}</li>
      <li>Voto: {{ result.vote_average }}/10</li>
    </ol>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
