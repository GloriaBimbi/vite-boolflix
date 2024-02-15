import { reactive } from "vue";

export const store = reactive({
  movieTitle: "",
  apiUriMovies:
    "https://api.themoviedb.org/3/search/movie?api_key=5cf2112ddf23b3b71a19a74fcd05ae67&language=it-IT&query=",
  apiUriTvSeries:
    "https://api.themoviedb.org/3/search/tv?api_key=5cf2112ddf23b3b71a19a74fcd05ae67&language=it-IT&query=",
  results: [],
});
