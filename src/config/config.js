
const BASE_URL = `https://api.themoviedb.org/3/`;
const LS_KEY_PREFIX = `ipof--`;

const config = {
  apiKey: `fa90a952a4748e9bfbbac161f2c5000f`,
  defaultLanguage: `en-US`,
  paths: {
    configuration: `${BASE_URL}configuration`,
    search: `${BASE_URL}search/multi`,
    searchMovies: `${BASE_URL}search/movie`,
    searchTvShows: `${BASE_URL}search/tv`,
    searchPeople: `${BASE_URL}search/person`,
    movie: `${BASE_URL}movie/`,
    tv: `${BASE_URL}tv/`,
    person: `${BASE_URL}person/`,
    movieGenres: `${BASE_URL}genre/movie/list`,
    tvGenres: `${BASE_URL}genre/tv/list`
  },
  localStorageKeys: {
    configuration: `${LS_KEY_PREFIX}configuration`,
    movieGenres: `${LS_KEY_PREFIX}movieGenres`,
    tvGenres: `${LS_KEY_PREFIX}tvGenres`
  }
};

export default config;