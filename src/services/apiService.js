import config from '../config/config';
import _ from 'lodash';
import lockr from 'lockr';
import { formatApiData, getAuthedRequest } from './apiServiceFunctions';


/* ====================================== */
/*              API Service
/* ====================================== */

const apiService = {
  getConfiguration: getConfiguration,
  getMovieGenres: getMovieGenres,
  getTvGenres: getTvGenres,
  searchMovies: searchMovies,
  searchTvShows: searchTvShows,
  searchPeople: searchPeople,
  getMovieById: getMovieById,
  getTvShowById: getTvShowById,
  getPersonById: getPersonById
};

export default apiService;

/* ====================================== */
/*              Functions
/* ====================================== */

/*  Configuration
 * ====================================== */

/**
 * Get configuration for TheMovieDB (required in
 * order to get image URL components)
 * 
 * @public
 * 
 * @returns { Promise }
 */
function getConfiguration() {
  return fetchData({
    name: 'config',
    path: config.paths.configuration,
    lsKey: config.localStorageKeys.configuration,
    params: {},
    formatType: 'CONFIGURATION',
    shouldCacheResults: true
  });
}


/* Genres
 * ====================================== */

/**
 * Get movie genres
 * 
 * @public
 * 
 * @description
 * Returns a promise to movie genre data.
 * Data is formatted as a dictionary where the keys
 * are the genre IDs, and the values are the names of
 * the genres (strings).
 * 
 * e.g. (NOTE: not real IDs)
 * {
 *    14953: 'Comedy',
 *    3294: 'Animation;
 * }
 * 
 * @returns { Promise }
 */
function getMovieGenres() {
}

/**
 * Get movie genres
 * 
 * @public
 * 
 * @description
 * Returns a promise to tv genre data.
 * Data is formatted as a dictionary where the keys
 * are the genre IDs, and the values are the names of
 * the genres (strings).
 * 
 * e.g. (NOTE: not real IDs)
 * {
 *    5904: 'Action',
 *    3294: 'Animation;
 * }
 * 
 * @returns { Promise }
 */
function getTvGenres() {
}


/* Searches
 * ====================================== */

/**
 * Search movies
 * 
 * @public
 * 
 * @description
 * Searches TheMovieDB for movie data using a query string,
 * and a page which represents the desired results page.
 * 
 * @param { String } query - query string used to search movies
 * @param { Number } page - page number to return
 * 
 * @returns { Promise }
 */
function searchMovies(query, page) {
}

/**
 * Search tv shows
 * 
 * @description
 * Searches TheMovieDB for tv show data using a query string,
 * and a page which represents the desired results page.
 * 
 * @param { String } query - query string used to search tv shows
 * @param { Number } page - page number to return
 * 
 * @returns { Promise }
 */
function searchTvShows(query, page) {
}

/**
 * Search people
 * 
 * @public
 * 
 * @description
 * Searches TheMovieDB for people data using a query string,
 * and a page which represents the desired results page.
 * 
 * @param { String } query - query string used to search people
 * @param { Number } page - page number to return
 * 
 * @returns { Promise }
 */
function searchPeople(query, page) {
}


/* Get items by ID
 * ====================================== */

/**
 * Get movie by ID
 * 
 * @public
 * 
 * @description
 * Returns a movie based on a passed-in ID.
 * 
 * @param { Number|String } id - id of the movie to get
 */
function getMovieById(id) {
}

/**
 * Get tv show by ID
 * 
 * @public
 * 
 * @description
 * Returns a tv show based on a passed-in ID.
 * 
 * @param { Number|String } id - id of the tv show to get
 */
function getTvShowById(id) {
}

/**
 * Get person by ID
 * 
 * @public
 * 
 * @description
 * Returns a person based on a passed-in ID.
 * 
 * @param { Number|String } id - id of the person to get
 */
function getPersonById(id) {
}


/* Generic fetch function
 * ====================================== */

/**
 * Fetch data
 * 
 * @private
 * 
 * @description
 * Function which handles returning a promise to data located at
 * a specific URL. If specified, data will be cached in local storage
 * and returned from there on subsequent requests.
 * 
 * @param { String } name - data name identifier
 * @param { String } path - path to the desired data (URL)
 * @param { String } lsKey - local storage key name to use
 * @param { Object } params - query sting parameters to add onto the path
 * @param { String } formatType - string specifying format type to use on data (formatting will be implemented in a standalone way)
 * @param { Boolean } shouldCacheResults - specifies whether or not to cache result data in local storage
 */
function fetchData({
  name = 'default name',
  path = null,
  lsKey = null,
  params = {},
  formatType = 'DEFAULT',
  shouldCacheResults = false}) {

  if (lsKey) {
    let cachedData = lockr.get(lsKey);
    if (cachedData) {
      // console.log(`Fetch ${name} from LS...`);
      return Promise.resolve(cachedData).then(data => {
        return data;
      });
    }
  }

  if (path) {
    const req = getAuthedRequest(path, params, config.apiKey);
    return fetch(req)
      .then(res => {
        return res.json();
      })
      .then(data => {

        if (formatType) {
          data = formatApiData(data, formatType);
        }

        if (shouldCacheResults) {
          lockr.set(lsKey, data);
        }

        return data;
      });
  }
  else {
    throw new Error('fetchData() must be provided with a "path" property');
  }
}