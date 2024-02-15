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
              posterPath: result.poster_path,
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
              posterPath: result.poster_path,
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
    generateFlagImg(language) {
      if (language == "ja") {
        return "/img/ja-flag.jpg";
      }
      if (language == "en") {
        return "/img/en-flag.jpg";
      }
      if (language == "it") {
        return "/img/it-flag.jpg";
      }
      if (language == "fr") {
        return "/img/fr-flag.jpg";
      }
      if (language == "de") {
        return "/img/de-flag.jpg";
      }
      if (language == "pt") {
        return "/img/pt-flag.jpg";
      }
      if (language == "ru") {
        return "/img/ru-flag.jpg";
      }
      if (language == "fi") {
        return "/img/fi-flag.jpg";
      }
      if (language == "da") {
        return "/img/da-flag.jpg";
      }
      if (language == "sr") {
        return "/img/sr-flag.jpg";
      }
      if (language == "ko") {
        return "/img/ko-flag.jpg";
      }
      if (language == "hi") {
        return "/img/hi-flag.jpg";
      }
      if (language == "bn") {
        return "/img/bn-flag.jpg";
      }
      if (language == "no") {
        return "/img/no-flag.jpg";
      }
      if (language == "es") {
        return "/img/es-flag.jpg";
      }

      return "/img/general-flag.jpg";
    },
    buildImagePath(imageName) {
      return new URL(
        store.poster.posterUrl + store.poster.posterWidth + imageName,
        import.meta.url
      ).href;
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
    <ol v-for="(result, index) in store.resultMovies">
      <li><img :src="buildImagePath(result.posterPath)" alt="" /></li>
      <li>Titolo: {{ result.title }}</li>
      <li>Titolo Originale: {{ result.original_title }}</li>
      <li>
        Lingua:
        <img
          :src="generateFlagImg(result.language)"
          alt="flag image"
          style="max-width: 30px"
        />
      </li>
      <li>Voto: {{ result.vote }}/10</li>
    </ol>
    <ol v-for="(result, index) in store.resultTvSeries">
      <li>Titolo: {{ result.title }}</li>
      <li>Titolo Originale: {{ result.original_title }}</li>
      <li>
        Lingua:
        <img
          :src="generateFlagImg(result.language)"
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
