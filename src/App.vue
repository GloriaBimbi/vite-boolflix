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
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=5cf2112ddf23b3b71a19a74fcd05ae67&query=harry potter&language=it-IT"
        )
        .then((response) => {
          const result = response.data;
          console.log(response.data);
          console.log(response.data.respose);
        });

      store.movieTitle = "";
    },
  },
};
</script>

<template>
  <div class="container">
    <form class="row g-3">
      <div class="col-auto">
        <input
          v-model="store.movieTitle"
          type="text"
          class="form-control"
          placeholder="Harry Potter"
        />
      </div>
      <div class="col-auto">
        <button
          @click="searchTitle()"
          @keyup.enter="searchTitle()"
          type="submit"
          class="btn btn-primary mb-3"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
