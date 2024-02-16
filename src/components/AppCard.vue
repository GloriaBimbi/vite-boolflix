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
      const newUrl = new URL(
        store.poster.posterUrl + store.poster.posterWidth + imageName,
        import.meta.url
      ).href;
      if (imageName == null) {
        return new URL("../assets/img-not-found.png", import.meta.url).href;
      } else {
        return newUrl;
      }
    },
    convertVote() {
      const voteOn5 = this.card.vote / 2;
      store.newVote = Math.ceil(voteOn5);
      return store.newVote;
    },
  },
  props: {
    card: Object,
    index: Number,
  },
  created() {
    this.convertVote();
  },
};
</script>

<template>
  <ol>
    <li>
      <img
        :src="buildImagePath(card.poster_path)"
        alt="poster"
        style="width: 185px; height: 278px; object-fit: cover"
      />
    </li>
    <li>Titolo: {{ card.title }}</li>
    <li>Titolo Originale: {{ card.original_title }}</li>
    <li>
      Lingua:
      <img
        :src="generateFlagImg(card.language)"
        alt="flag image"
        style="max-width: 30px"
      />
    </li>
    <li>
      Voto:
      <font-awesome-icon
        v-for="star in 5"
        :icon="
          star <= convertVote() ? 'fa-solid fa-star' : 'fa-regular fa-star'
        "
      />
      {{ convertVote() }}/5
    </li>
  </ol>
</template>

<style lang="scss" scoped></style>
