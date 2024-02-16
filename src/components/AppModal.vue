<script>
import store from "../store/index";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    closeModal() {
      store.modal.show = false;
    },
    buildImagePath(imageName) {
      return new URL(
        store.poster.posterUrl + store.poster.posterWidth + imageName,
        import.meta.url
      ).href;
    },
  },
  computed: {
    convertVote() {
      return (store.newVote = Math.ceil(store.modal.vote / 2));
    },
  },
};
</script>

<template>
  <div class="layover">
    <div class="modal">
      <h3>SONO UNA MODALE</h3>
      <font-awesome-icon
        icon="fa-solid fa-x"
        @click="closeModal()"
        class="close-element"
      />

      <div class="img-container">
        <img
          :src="buildImagePath(store.modal.srcPoster)"
          alt="immagine della porduzione selezionata"
        />
        <img
          :src="buildImagePath(store.modal.scrBackdrop)"
          alt="immagine della porduzione selezionata"
        />
      </div>
      <div class="info">
        <ol class="info">
          <li>Titolo: {{ store.title.title }}</li>
          <li>Titolo Originale: {{ store.modal.original_title }}</li>
          <li>
            Lingua:
            <img
              :src="generateFlagImg(store.modal.language)"
              alt="flag image"
              style="max-width: 30px"
            />
          </li>
          <li>
            Voto:
            <font-awesome-icon
              v-for="star in 5"
              :icon="
                star <= convertVote ? 'fa-solid fa-star' : 'fa-regular fa-star'
              "
            />
            {{ convertVote }}
            /5
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  width: 80%;
  height: 960px;
  background-color: rgb(20, 20, 20);
  color: white;
  padding: 1rem;
  position: relative;

  .close-element {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
