import { reactive } from "vue";

export const store = reactive({
  movieTitle: "",
  apiUriMovies:
    "https://api.themoviedb.org/3/search/movie?api_key=5cf2112ddf23b3b71a19a74fcd05ae67&language=it-IT&query=",
  apiUriTvSeries:
    "https://api.themoviedb.org/3/search/tv?api_key=5cf2112ddf23b3b71a19a74fcd05ae67&language=it-IT&query=",
  resultMovies: [
    {
      backdrop_path: "/hQjCwC222uOusRsAqEOoTHY0sBX.jpg",
      id: 10889,
      language: "en",
      original_title: "Gloria",
      poster_path: "/kfhxjoaHZVNkyVrE9MhkvdENb9V.jpg",
      title: "Gloria - Una notte d'estate",
      vote: 6.839,
      overview:
        "Per impadronirsi di documenti che scottano e per punire un traditore, una organizzazione criminale massacra una famiglia intera. Alla strage riesce a sfuggire soltanto uno dei figli, affidato dai genitori a Gloria, una vicina di casa. La donna, legata in passato alla medesima organizzazione, si trova ad assumere l'ingrato compito di proteggere il ragazzino cui finisce per affezionarsi. Pur di sottrarlo alla vendetta dei killer, Gloria, che sa sparare come un uomo e ha un coraggio da leone, non esita ad affrontarli con i loro stessi mezzi.",
    },
    {
      backdrop_path: "/yXuJeoPkxYjWS9XyNzuR8VDZLLJ.jpg",
      id: 264401,
      language: "es",
      original_title: "Gloria",
      poster_path: "/1yVRLamL1TixPSrWAJQ51AI6PZr.jpg",
      title: "Gloria",
      vote: 7.439,
      overview:
        "Gloria never imagined that an audition for the music producer Sergio Andrade was going to change her life so drastically. King Midas not only brought her to stardom, but also to a dramatic story of love, heartbreak and betrayal. Based on the life story of  pop/rock singer Gloria Trevi.",
    },
    {
      backdrop_path: "/6rlOgCIxCuJj1cmlPcaBekgQuRb.jpg",
      id: 45712,
      language: "en",
      original_title: "Gloria",
      poster_path: "/1AKAfnT3nm7asU9qyNT6gtS1vbe.jpg",
      title: "Gloria",
      vote: 5.734,
      overview:
        "Un piccolo ragazzino portoricano, a cui hanno ammazzato l'intera famiglia, ha un dischetto che contiene dati compromettenti. Gloria, appena uscita di prigione, rinnegata dall'ex amante, si ritrova a dover badare e, ma soprattutto a dover difendere il marmocchio. L'incontro tra le due solitudini partorirà forse forze insospettabili.",
    },
    {
      backdrop_path: "/xqc5l6CCOBqni0gT9J2nvodhCD.jpg",
      id: 160068,
      language: "es",
      original_title: "Gloria",
      poster_path: "/t1copJu3ecVx7zVCBA1o6z02WcZ.jpg",
      title: "Gloria",
      vote: 6.68,
      overview:
        "Gloria è una cinquantottenne che si sente ancora giovane. Cercando di fare della sua solitudine una festa, trascorre le notti in cerca d'amore in sale da ballo per adulti single. La sua fragile felicità viene però a galla il giorno in cui incontra Rodolfo. L'intensa passione che nasce tra loro spinge Gloria a donare tutta se stessa, come se sentisse che questa è la sua ultima occasione, facendo la volteggiare tra speranza e disperazione. Gloria dovrà ritrovare il controllo di sé e attingere ad una nuova forza per scoprire che ancora una volta riuscirà a brillare più che mai.",
    },
    {
      backdrop_path: "/bIxK8MpVIRTJEK1JtbPXdX7IE4B.jpg",
      id: 245749,
      language: "pt",
      original_title: "Glória",
      poster_path: "/q4tt5JvK8kcrH1tbG2aXLOd6xlo.jpg",
      title: "Gloria",
      vote: 5.8,
      overview:
        "Gloria is set against the backdrop of a rural landscape slowly disappearing in modern Portugal. The small border town of Vila de Santiago, once a booming trade center for illegal trafficking, is about to become a ghost town, as a new motorway is to bypass the city and the railway station is being closed. Its stationmaster, Vincente, is preparing to retire. Many young people have moved out, leaving the children to be brought up by the elderly, including thirteen-year-old Glória and her friend Ivan. Glória's life suddenly changes with the arrival of Vincente's younger brother, Mauro, who has just come out of prison and has some old issues to settle. Mauro begins to charge around the station on his motorbike, while Glória's friendship with Ivan is put to test on account of her attraction to older Mauro.",
    },
    {
      backdrop_path: "/w1EeJYo5X4KtfJ9HNB2sYLa3bHe.jpg",
      id: 686168,
      language: "en",
      original_title: "Gloria",
      poster_path: "/bqygB0yuuS3xizeDxCBD8Iye9js.jpg",
      title: "Gloria",
      vote: 0,
      overview:
        "Ambientato in un collegio femminile nella Venezia di fine ‘700, Gloria! racconta la storia di Teresa, una giovane dal talento visionario, che, insieme a un gruppetto di straordinarie musiciste, scavalca i secoli e sfida i polverosi catafalchi dell’Ancien Régime inventando una musica ribelle, leggera e moderna. Pop!",
    },
  ],

  resultTvSeries: [
    {
      backdrop_path: null,
      id: 6572,
      language: "en",
      original_title: "Gloria",
      poster_path: "/4E0Posbd16qRwkHQsemgtaKf5nT.jpg",
      title: "Gloria",
      vote: 5,
      overview:
        "Gloria is an American situation comedy that lasted one season on CBS, from September 1982 to April 1983. It starred Sally Struthers, reprising her role as Gloria Stivic, the daughter of Archie Bunker on the hugely successful 1970s sitcom All in the Family. Gloria was a spin-off of Archie Bunker's Place, which was a continuation of All in the Family.",
    },
    {
      backdrop_path: "/rdzzVK4dPlZP1POAtBiotXRKOKz.jpg",
      id: 109369,
      language: "pt",
      original_title: "Glória",
      poster_path: "/aug3brGNuTlo70TyhwJ4XTlnMHC.jpg",
      title: "Glória",
      vote: 6.4,
      overview:
        "Una piccola città del Portogallo viene inghiottita da una rete di intrighi politici quando un giovane ingegnere viene reclutato come spia del KGB in questo thriller storico.",
    },
    {
      backdrop_path: "/spwu5U5PsYUJyWpSJNgD4UBemsN.jpg",
      id: 119881,
      language: "fr",
      original_title: "Gloria",
      poster_path: "/4cqiFPzbhHObt0NGZu3lojKaUgm.jpg",
      title: "Gloria",
      vote: 6.9,
      overview:
        "Gloria è un avvocato, madre di tre figli, in procinto di tornare al lavoro dopo il congedo di maternità. Il giorno prima trascorre la serata con gli amici e il giorno dopo suo marito David parte per lavorare come di consueto nello studio legale che ha ereditato dal padre Richard. Tuttavia, l'uomo diventa misteriosamente irraggiungibile.",
    },
    {
      backdrop_path: null,
      id: 100380,
      language: "en",
      original_title: "Gloria",
      poster_path: "/6GVNNrupFa1CR1Fua22ChU3Icj.jpg",
      title: "Gloria",
      vote: 0,
      overview:
        "One woman's growth during difficult circumstances and the two men around her. Na Jin-Jin lives with her mentally disabled older sister Na Jin-Joo, who possesses the mental capacity of a 5 year old. Na Jin-Jin dreams of a becoming a singer after she performs an impromptu version of Laura Branigan's 'Gloria' for a nightclub.",
    },
    {
      backdrop_path: "/9JhtTmFRO3knEzVo3SnuhTDq1Wz.jpg",
      id: 156587,
      language: "en",
      original_title: "Gloria's House",
      poster_path: "/ejpCJLLiF8PJhdzWJiliMIYARG8.jpg",
      title: "A casa di Gloria",
      vote: 0,
      overview:
        "Gloria's House is the messiest house in a street full of perfect homes but it's a lot more fun than any of the other squeaky clean places in Chillsville.",
    },
    {
      backdrop_path: "/7vCSrzwqS5PEm0i5mHlkDfjHcnX.jpg",
      id: 136283,
      language: "ko",
      original_title: "더 글로리",
      poster_path: "/uUM4LVlPgIrww07OoEKrGWlS1Ej.jpg",
      title: "The Glory",
      vote: 8.573,
      overview:
        "La vivace squadra del Gotham Garage ristruttura le auto e i furgoni più disparati. L'obiettivo: creare un veicolo eccezionale da rivendere per una valanga di soldi.",
    },
  ],
  myList: [],
  myMovieIndex: null,
  myTvSerieIndex: null,
  myItemIndex: null,
  poster: {
    posterUrl: "https://image.tmdb.org/t/p/",
    posterWidth: "w154/",
  },
  newVote: null,
  modal: {
    show: false,
    srcPoster: "",
    scrBackdrop: "",
    title: "",
    originalTitle: "",
    language: "",
    vote: "",
    overview: "",
  },
  showMovies: true,
  showTvSeries: true,
  showMyList: false,
  showAddToMyList: true,
});
