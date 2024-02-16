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
  },

  props: {
    card: Object,
    index: Number,
  },

  emits: ["open-model"],
};
</script>

<template>
  <div class="card" @click="$emit('open-model', this.index)">
    <img
      :src="buildImagePath(card.poster_path)"
      alt="poster"
      style="width: 154px; height: 231px; object-fit: cover"
    />
  </div>
</template>

<style lang="scss" scoped></style>
