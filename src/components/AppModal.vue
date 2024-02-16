<script>
import { store } from "../store/index";
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
  },
  computed: {
    convertVote() {
      return (store.newVote = Math.ceil(store.modal.vote / 2));
    },
  },
};
</script>

<template>
  <div>
    <div class="layover">
      <div class="my-modal">
        <font-awesome-icon
          icon="fa-solid fa-x"
          @click="closeModal()"
          class="close-element"
        />

        <div class="img-container">
          <img
            v-if="store.modal.srcPoster"
            :src="buildImagePath(store.modal.srcPoster)"
            alt="immagine della porduzione selezionata"
          />
          <img
            v-if="store.modal.scrBackdrop"
            :src="buildImagePath(store.modal.scrBackdrop)"
            alt="immagine della porduzione selezionata"
          />
        </div>
        <div class="info">
          <ol class="info">
            <li class="title">Titolo: {{ store.modal.title }}</li>
            <li class="original-title">
              Titolo Originale: {{ store.modal.originalTitle }}
            </li>
            <li>
              Lingua:
              <img
                :src="generateFlagImg(store.modal.language)"
                alt="flag image"
                style="max-width: 30px"
              />
            </li>
            <li class="vote">
              Voto:
              <font-awesome-icon
                v-for="star in 5"
                :icon="
                  star <= convertVote
                    ? 'fa-solid fa-star'
                    : 'fa-regular fa-star'
                "
              />
              {{ convertVote }}
              /5
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
.layover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: rgb(62, 62, 62);
  @include align("both");
  z-index: 1;

  .my-modal {
    width: 50%;
    height: 70%;
    background-color: rgb(20, 20, 20);
    color: white;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid red;
    position: relative;

    @include align("both");

    .close-element {
      position: absolute;
      top: 10px;
      right: 10px;
    }

    .img-container {
      @include align("both");
      gap: 5px;
      flex-direction: column;
    }

    .info {
      .title {
        color: rgb(86, 83, 83);
        font-size: 20px;
      }
      .original-title {
        color: grey;
        font-size: 15px;
      }
      .vote {
      }
    }
  }
}
</style>
