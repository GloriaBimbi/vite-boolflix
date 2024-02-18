<script>
import { store } from "../store/index";
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
              backdrop_path: result.backdrop_path,
              overview: result.overview,
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
              backdrop_path: result.backdrop_path,
              overview: result.overview,
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
    showMoviesSection() {
      store.showMyList = false;
      store.showMovies = true;
      store.showTvSeries = false;
    },
    showTvSeriesSection() {
      store.showMyList = false;
      store.showTvSeries = true;
      store.showMovies = false;
    },
    showHomeSection() {
      store.showMyList = false;
      store.showTvSeries = true;
      store.showMovies = true;
    },
    showMyListSection() {
      store.showTvSeries = false;
      store.showMovies = false;
      store.showMyList = true;
    },
  },
};
</script>

<template>
  <header>
    <div class="logo-section">
      <h1>BOOLFLIX</h1>
      <ul>
        <li @click="showHomeSection()"><a href="#">Home</a></li>
        <li @click="showTvSeriesSection()"><a href="#">Serie Tv</a></li>
        <li @click="showMoviesSection()"><a href="#">Film</a></li>
        <li @click="showMyListSection()"><a href="#">La mia lista</a></li>
      </ul>
    </div>
    <div class="search-bar">
      <div class="input">
        <button @click="searchTitle()" class="btn">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
        <input
          @keyup.enter="searchTitle()"
          v-model="store.movieTitle"
          type="text"
          placeholder="inserisci un titolo"
        />
      </div>

      <div class="icon"><font-awesome-icon icon="fa-solid fa-bell" /></div>
      <img src="/img/profile-img.jpg" alt="profile image" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;

header {
  background-color: rgb(12, 12, 12);
  height: 80px;

  @include align("vertical");
  justify-content: space-between;

  .logo-section {
    @include align("both");
    height: 80px;

    h1 {
      font-size: 30px;
      color: red;
      padding: 10px;
      line-height: 80px;
      cursor: pointer;
      font-weight: bolder;
    }
    ul {
      @include align("both");
      gap: 25px;
      li {
        cursor: pointer;

        &:hover {
          border-bottom: 5px solid red;
        }
        a {
          font-size: 15px;
          color: grey;
          padding: 10px;
          line-height: 80px;
          font-weight: bolder;
          &:hover {
            color: rgb(230, 227, 227);
          }
        }
      }
    }
  }
  .search-bar {
    padding: 10px;
    height: 80px;
    color: white;
    @include align("both");
    gap: 10px;

    button {
      padding: 0 10px;
    }
    input {
      padding: 5px 10px;
      color: rgb(240, 239, 239);
      border: 0;
      border-radius: 5px;
      background-color: rgba(38, 38, 38, 0.711);
      filter: brightness(50%);

      &:hover {
        filter: brightness(100%);
      }
    }

    .icon {
      padding: 0 10px;
    }

    button,
    .icon {
      color: rgb(240, 239, 239);
      font-size: 20px;
      filter: brightness(100%);

      &:hover {
        filter: brightness(50%);
      }
    }

    img {
      width: 30px;
      cursor: pointer;

      &:hover {
        filter: opacity(50%);
      }
    }
  }
}
</style>
