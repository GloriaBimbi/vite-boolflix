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
    addToMyList(){
      console.log(store.myMovieIndex );
      if(store.myMovieIndex !== null){
        store.myList.push(store.resultMovies[store.myMovieIndex]);
        store.myMovieIndex = null;
      } else {
        store.myList.push(store.resultTvSeries[store.myTvSerieIndex]);
        store.myTvSerieIndex = null;
      }
      
      this.closeModal();
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
        <div class="info-container">
          <ol class="info">
            <li class="title">{{ store.modal.title }}</li>
            <li class="overview">{{ store.modal.overview }}</li>
            <li class="secondary-info-container">
              <li class="original-title">{{ store.modal.originalTitle }}</li>
              <li class="language"><img :src="generateFlagImg(store.modal.language)" alt="flag image" style="max-width: 30px" /></li>
              <li class="vote"><font-awesome-icon v-for="star in 5" :icon=" star <= convertVote ? 'fa-solid fa-star' : 'fa-regular fa-star' " /> </li>
            </li> 
            <li class="reproduction-options">
              <div @click="closeModal()" class="play">
                <font-awesome-icon icon="fa-solid fa-play" class="icon" />
                <h5>Riproduci</h5>
              </div>
              <div @click="addToMyList()" class="add-to-my-list">
                <font-awesome-icon icon="fa-solid fa-plus" class="icon" />
                <h5>La mia lista</h5>
              </div>
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
    padding: 30px;
    width: 65%;
    background-color: rgb(20, 20, 20);
    color: white;
    padding: 1rem;
    border-radius: 1rem;
    position: relative;

    @include align("both");

    .close-element {
      font-size: 30px;
      position: absolute;
      top: 10px;
      right: 10px;
      color: rgb(86, 83, 83);

    }

    .img-container {
      width: 30%;
      @include align("both");
      gap: 5px;
      flex-direction: column;
    }

    .info-container{
      width: 70%;

      .info {
        .title {
          color: white;
          font-size: 30px;
          text-align: center;
          margin-top: 30px;
          margin-bottom: 40px;
        }

        .overview{
          color: rgb(86, 83, 83);
          max-height: 180px;
          overflow: scroll;
        }
        .secondary-info-container{
          margin-top: 40px;
          @include align("both");
          gap: 40px;
          color: white;

          .original-title {
            font-size: 15px;
          }
          .language{
          }
          .vote {
          }
        }

        .reproduction-options{
          margin-top: 40px;
          @include align("both");
          gap: 40px;

          h5{
            text-align: center;
            font-size: 15px;
            margin: 0;
          }

          .play,
          .add-to-my-list{
            @include align("both");
            gap: 20px;
            padding: 8px 60px;
            border-radius: 8px;
            cursor: pointer;

            .icon{
              font-size: 22px;

            }


          }

          .play{
            background-color: white;
            color: black;
            opacity: 80%;

              &:hover{
                opacity: 100%;
              }
          }
          .add-to-my-list{
            background-color: rgb(96, 96, 96);
            color: white;
            opacity: 70%;

              &:hover{
                opacity: 100%;
              }
          }
        }
          
      }
    }
    
  }
}
</style>
