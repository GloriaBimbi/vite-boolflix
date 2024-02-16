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

<style lang="scss" scoped>
.card {
  border: 0;
}
</style>
