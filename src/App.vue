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
    fetchTitle() {
      axios
        .get(store.apiUriMovies + store.movieTitle)
        .then((response) => {
          store.results = response.data.results.map((result) => {
            return {
              title: result.title,
              original_title: result.original_title,
              language: result.original_language,
              vote: result.vote_average,
            };
          });
          console.log(response.data.results);
        })
        .catch((error) => {
          alert(error.message);
        });
      store.movieTitle = "";
    },
    searchMovieTitle() {
      if (store.movieTitle != "") {
        this.fetchTitle();
      } else {
        alert(
          "ERRORE: per avviare la ricerca devi inserire almeno un carattere"
        );
      }
    },
    // searchTvSerieTitle() {
    //   axios
    //     .get(store.apiUriTvSeries + store.movieTitle)
    //     .then((response) => {
    //       store.results = response.data;
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       alert(error.message);
    //     });
    //   store.movieTitle = "";
    // },
    generateFlagImg(i) {
      if (store.results[i].language == "ja") {
        return "/img/ja-flag.jpg";
      }
      if (store.results[i].language == "en") {
        return "/img/en-flag.jpg";
      }
      if (store.results[i].language == "it") {
        return "/img/it-flag.jpg";
      }
      if (store.results[i].language == "fr") {
        return "/img/fr-flag.jpg";
      }
      if (store.results[i].language == "de") {
        return "/img/de-flag.jpg";
      }
      if (store.results[i].language == "pt") {
        return "/img/pt-flag.jpg";
      }
      if (store.results[i].language == "ru") {
        return "/img/ru-flag.jpg";
      }
      if (store.results[i].language == "fi") {
        return "/img/fi-flag.jpg";
      }
      if (store.results[i].language == "da") {
        return "/img/da-flag.jpg";
      }
      if (store.results[i].language == "sr") {
        return "/img/sr-flag.jpg";
      }
      if (store.results[i].language == "ko") {
        return "/img/ko-flag.jpg";
      }
      if (store.results[i].language == "hi") {
        return "/img/hi-flag.jpg";
      }
      if (store.results[i].language == "bn") {
        return "/img/bn-flag.jpg";
      }
      if (store.results[i].language == "no") {
        return "/img/no-flag.jpg";
      }
      if (store.results[i].language == "es") {
        return "/img/es-flag.jpg";
      }

      return "/img/general-flag.jpg";
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="col-auto">
      <input
        @keyup.enter="searchMovieTitle()"
        v-model="store.movieTitle"
        type="text"
        class="form-control"
        placeholder="Harry Potter"
      />
    </div>
    <div class="col-auto">
      <button
        @click="searchMovieTitle()"
        type="submit"
        class="btn btn-primary mb-3"
      >
        Search
      </button>
    </div>
    <ol v-for="(result, index) in store.results">
      <li>Titolo: {{ result.title }}</li>
      <li>Titolo Originale: {{ result.original_title }}</li>
      <li>
        Lingua:
        <img
          :src="generateFlagImg(index)"
          alt="flag image"
          style="max-width: 30px"
        />
      </li>
      <li>Voto: {{ result.vote }}/10</li>
    </ol>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
