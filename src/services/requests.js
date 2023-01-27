export const requests = {
  fetchTrending: {
    title: "Trending Now",
    requestEndpoint: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  },

  fetchNetflixOriginals: {
    title: "NETFLIX Originals",
    requestEndpoint: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_network=213`,
  },
  fetchTopRated: {
    title: "Top Rated",
    requestEndpoint: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    requestEndpoint: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    requestEndpoint: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    requestEndpoint: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    requestEndpoint: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
  },
  fetchDocumentaries: {
    title: "Documentaries",
    requestEndpoint: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
  },
};
