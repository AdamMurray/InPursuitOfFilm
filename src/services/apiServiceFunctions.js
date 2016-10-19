import _ from 'lodash';

/* ====================================== */
/*              API Service Functions
/* ====================================== */

export {
  getAuthedRequest,
  formatApiData
}

/* ====================================== */
/*              Functions
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
function getAuthedRequest(path, params, apiKey) {
  let requestString = `${path}?api_key=${apiKey}`;

  if (params !== undefined) {
    _.forEach(params, (value, key) => {
      requestString += `&${key}=${value}`;
    });
  }

  return new Request(requestString);
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
 */
function formatApiData(state, type) {
  switch (type) {
    case 'SEARCH_MOVIE_RESULTS':
      // return formatMovieSearchResults(state);
    
    case 'SEARCH_TV_RESULTS':
      // return formatTvSearchResults(state);
    
    case 'SEARCH_PEOPLE_RESULTS':
      // return formatActorSearchResults(state);

    case 'MOVIE_GENRES':
      // return formatMovieGenres(state);

    case 'TV_GENRES':
      // return formatTvGenres(state);

    case 'CONFIGURATION':
      // return formatConfiguration(state);
      
    default:
      return state;
  }
}