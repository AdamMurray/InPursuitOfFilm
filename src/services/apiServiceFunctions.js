import _ from 'lodash';

/* ====================================== */
/*              API Service Functions
/* ====================================== */

export {
getAuthedRequest,
formatApiData
}

/* ====================================== */
/*              Public Functions
/* ====================================== */

/**
 * Get authed request
 * 
 * @public
 * 
 * @description
 * Returns a Request object created using the specified path,
 * params, and api key.
 * 
 * @param { String } path - URI path to data
 * @param { Object } params - query string parameters
 * @param { String } apiKey - api key to use for auth
 * 
 * @returns { Request }
 */
function getAuthedRequest({
  path = null,
  params = {},
  apiKey = null
}) {

  if (path && apiKey) {
    let requestString = `${path}?api_key=${apiKey}`;

    if (params !== undefined) {
      _.forEach(params, (value, key) => {
        requestString += `&${key}=${value}`;
      });
    }

    return new Request(requestString);
  }
  else {
    throw new Error('getAuthedRequest() must be supplied both a "path" and "apiKey');
  }
}

/**
 * Format API data
 * 
 * @public
 * 
 * @description
 * Takes state and a type parameter and returns the formatted state.
 * 
 * @param { Object|Array|String } state
 * @param { String } type
 * 
 * @returns { Object }
 */
function formatApiData(state, type) {
  switch (type) {
    case 'SEARCH_MOVIE_RESULTS':
      return formatMovieSearchResults(state);

    case 'SEARCH_TVSHOW_RESULTS':
      return formatTvShowSearchResults(state);

    case 'SEARCH_PEOPLE_RESULTS':
      return formatPeopleSearchResults(state);

    case 'MOVIE_GENRES':
      return formatMovieGenres(state);

    case 'TV_GENRES':
      return formatTvShowGenres(state);

    case 'CONFIGURATION':
      return formatConfiguration(state);

    default:
      return state;
  }
}

/* ====================================== */
/*              Private Functions
/* ====================================== */

/**
 * Format movie search results
 * 
 * @private
 * 
 * @description
 * Takes the API data and formats it. Movie 'results' come
 * back from the API as an array. This is converted here to
 * a dictionary where the keys are the movie IDs and the values
 * are the movie data.
 * 
 * @param { Object } data - data returned from API
 * 
 * @returns { Object }
 */
function formatMovieSearchResults(data) {
  let resultsObj = {};
  resultsObj.page = data.page;
  resultsObj.totalPages = data.total_pages;
  resultsObj.totalResults = data.total_results;

  let moviesById = {};

  _.forEach(data.results, r => {
    moviesById = addToMovies(moviesById, r);
  });

  resultsObj.moviesById = moviesById;

  return resultsObj;

  function addToMovies(obj, movie) {
    let newObj = obj;
    newObj[movie.id] = movie;
    return newObj;
  }
}

/**
 * Format tv show search results
 * 
 * @private
 * 
 * @description
 * Takes the API data and formats it. TV show 'results' come
 * back from the API as an array. This is converted here to
 * a dictionary where the keys are the tv show IDs and the values
 * are the tv show data.
 * 
 * @param { Object } data - data returned from API
 * 
 * @returns { Object }
 */
function formatTvShowSearchResults(data) {
  let resultsObj = {};
  resultsObj.page = data.page;
  resultsObj.totalPages = data.total_pages;
  resultsObj.totalResults = data.total_results;

  let tvById = {};

  _.forEach(data.results, r => {
    tvById = addToTv(tvById, r);
  });

  resultsObj.tvById = tvById;

  return resultsObj;

  function addToTv(obj, tv) {
    let newObj = obj;
    newObj[tv.id] = tv;
    return newObj;
  }
}

/**
 * Format people search results
 * 
 * @private
 * 
 * @description
 * Takes the API data and formats it. People 'results' come
 * back from the API as an array. This is converted here to
 * a dictionary where the keys are the people IDs and the values
 * are the people data.
 * 
 * @param { Object } data - data returned from API
 * 
 * @returns { Object }
 */
function formatPeopleSearchResults(data) {
  let resultsObj = {};
  resultsObj.page = data.page;
  resultsObj.totalPages = data.total_pages;
  resultsObj.totalResults = data.total_results;

  let peopleById = {};

  _.forEach(data.results, r => {
    peopleById = addToPeople(peopleById, r);
  });

  resultsObj.peopleById = peopleById;

  return resultsObj;

  function addTopeople(obj, person) {
    let newObj = obj;
    newObj[person.id] = person;
    return newObj;
  }
}

/**
 * Format movie genres
 * 
 * @private
 * 
 * @param { Object } data - data returned from API
 * 
 * @returns { Object }
 */
function formatMovieGenres(data) {
  let movieGenres = data.genres;
  let movieGenresById = {};

  _.forEach(movieGenres, (genre) => {
    movieGenresById[genre.id] = genre.name;
  });

  return movieGenresById
}

/**
 * Format TV show genres
 * 
 * @private
 * 
 * @param { Object } data - data returned from API
 * 
 * @returns { Object }
 */
function formatTvShowGenres(data) {
  let tvGenres = data.genres;
  let tvGenresById = {};

  _.forEach(tvGenres, (genre) => {
    tvGenresById[genre.id] = genre.name;
  });

  return tvGenresById
}

/**
 * Format configuration data
 * 
 * @private
 * 
 * @param { Object } data - data returned from API
 * 
 * @returns { Object }
 */
function formatConfiguration(data) {
  return data;
}