import React, { PropTypes } from 'react';
import './Main.css';
import SearchBar from '../SearchBar/SearchBar';
import ScrollPanel from '../ScrollPanel/ScrollPanel';
import _ from 'lodash';

const Main = ({
  appConnectivityState,
  imageBaseUrl,
  movieImageSize,
  tvImageSize,
  personProfilePicSize,
  loading,
  searchDb,
  setSearchQuery,
  searchQuery,
  movies,
  tvShows,
  people }) => {

  let movieImagePath = `${imageBaseUrl}${movieImageSize}`;
  let tvImagePath = `${imageBaseUrl}${tvImageSize}`;
  let personImagePath = `${imageBaseUrl}${personProfilePicSize}`;

  // Show loader when loading data
  let loader;
  if (loading) {
    loader =
      <div className='ipof__loading-panel'>
        <div className="loader"></div>
      </div>;
  }

  return (
    <div className="ipof__main-content">

      <div>{loader}</div>

      <SearchBar
        searchDb={searchDb}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        />

      <ScrollPanel
        title="Films"
        data={movies}
        cardTitleProp={'title'}
        cardImagePath={movieImagePath}
        cardImageProp={'poster_path'}
        dateProp={'release_date'}
        />

      <ScrollPanel
        title="TV Shows"
        data={tvShows}
        cardTitleProp={'name'}
        cardImagePath={tvImagePath}
        cardImageProp={'poster_path'}
        dateProp={'first_air_date'}
        />

      <ScrollPanel
        title="People"
        data={people}
        cardTitleProp={'name'}
        cardImagePath={personImagePath}
        cardImageProp={'profile_path'}
        />

    </div>
  );
}

Main.propTypes = {
  movies: PropTypes.object.isRequired,
  tvShows: PropTypes.object.isRequired,
  people: PropTypes.object.isRequired
};

export default Main;
