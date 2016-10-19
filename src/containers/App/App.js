import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Main/Main';
import Notification from '../../components/Notification/Notification';
import apiService from '../../services/apiService';

/**
 * App component: main container for app, handles API calls
 */
class App extends Component {
  /**
   * Create App
   */
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      config: null,
      imageBaseUrl: null,
      movieImageSize: null,
      tvImageSize: null,
      personProfilePicSize: null,
      movieGenres: null,
      tvGenres: null,
      searchQuery: '',
      moviesById: {},
      moviesPageToGet: 1,
      tvById: {},
      tvPageToGet: 1,
      peopleById: {},
      peoplePageToGet: 1,
      appConnectivityState: navigator.onLine ? 'online' : 'offline'
    };

    this.getConfiguration = this.getConfiguration.bind(this);
    this.getMovieGenres = this.getMovieGenres.bind(this);
    this.getTvGenres = this.getTvGenres.bind(this);
    this.searchDb = this.searchDb.bind(this);
    this.setSearchQuery = this.setSearchQuery.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.searchTvShows = this.searchTvShows.bind(this);
    this.searchPeople = this.searchPeople.bind(this);
    this.addEventListeners = this.addEventListeners.bind(this);
    this.handleOnline = this.handleOnline.bind(this);
    this.handleOffline = this.handleOffline.bind(this);
  }

  /**
   * Add event listeners
   */
  addEventListeners() {
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);
  }

  /**
   * Handle online event
   */
  handleOnline(evt) {
    console.log('Online:', evt);
    this.setState({
      appConnectivityState: 'online'
    });
  }

  /**
   * Handle offline event
   */
  handleOffline(evt) {
    console.log('Offline:', evt);
    this.setState({
      appConnectivityState: 'offline'
    });
  }

  /**
   * Component Will Mount
   * 
   * Load configuration, movie genres, and tv genres
   * on componentWillMount
   */
  componentWillMount() {
    this.addEventListeners();

    this.setState({
      loading: true
    });

    Promise.all([
      this.getConfiguration(),
      this.getMovieGenres(),
      this.getTvGenres()
    ])
      .then(() => {
        this.setState({
          loading: false
        })
      });
  }

  /**
   * Get configuration for TheMovieDB
   * 
   * @returns { Promise }
   */
  getConfiguration() {
    return apiService.getConfiguration().then(data => {
      console.log('Config data:', data);
      this.setState({
        config: data,
        imageBaseUrl: data.images.secure_base_url,
        movieImageSize: data.images.poster_sizes[5],
        tvImageSize: data.images.poster_sizes[5],
        personProfilePicSize: data.images.profile_sizes[2]
      });
    });
  }

  /**
   * Get movie genres
   * 
   * @returns { Promise }
   */
  getMovieGenres() {
    return apiService.getMovieGenres().then(data => {
      console.log('Movie genre data:', data);
      this.setState({
        movieGenres: data
      });
    });
  }

  /**
   * Get tv genres
   * 
   * @returns { Promise }
   */
  getTvGenres() {
    return apiService.getTvGenres().then(data => {
      console.log('TV genre data:', data);
      this.setState({
        tvGenres: data
      });
    });
  }

  /**
   * Search TheMovieDB
   * 
   * @params { Event } evt
   */
  searchDb(evt) {
    evt.preventDefault();

    if (this.state.searchQuery.length) {
      this.setState({
        loading: true
      });

      Promise.all([
        this.searchMovies(),
        this.searchTvShows(),
        this.searchPeople()
      ])
        .then(() => {
          this.setState({
            loading: false
          });
        })
        .catch(() => {
          this.setState({
            loading: false
          });
        });
    }

    return false;
  }

  /**
   * Search movies
   */
  searchMovies() {
    return apiService.searchMovies(this.state.searchQuery, this.state.moviesPageToGet).then(data => {
      this.setState({
        moviesById: data.moviesById,
        loading: false
      });
      console.log('Movie data:', data);
    });
  }

  /**
   * Search TV shows
   */
  searchTvShows() {
    return apiService.searchTvShows(this.state.searchQuery, this.state.tvPageToGet).then(data => {
      this.setState({
        tvById: data.tvById
      });
      console.log('Tv data:', data);
    });
  }

  /**
   * Search people
   */
  searchPeople() {
    return apiService.searchPeople(this.state.searchQuery, this.state.peoplePageToGet).then(data => {
      this.setState({
        peopleById: data.peopleById
      });
      console.log('People data:', data);
    });
  }

  /**
   * Search search query
   */
  setSearchQuery(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }

  /**
   * Render function
   */
  render() {
    let notification;
    if (this.state.appConnectivityState === 'offline') {
      notification = <Notification message={"Oh no, it looks like you're offline"} />;
    }
    else {
      notification = null;
    }

    return (
      <div>
        <Nav appConnectivityState={this.state.appConnectivityState} />
        <Main
          appConnectivityState={this.state.appConnectivityState}
          loading={this.state.loading}
          imageBaseUrl={this.state.imageBaseUrl}
          movieImageSize={this.state.movieImageSize}
          tvImageSize={this.state.tvImageSize}
          personProfilePicSize={this.state.personProfilePicSize}
          movies={this.state.moviesById}
          tvShows={this.state.tvById}
          people={this.state.peopleById}
          searchDb={this.searchDb}
          setSearchQuery={this.setSearchQuery}
          searchQuery={this.state.searchQuery}
          />

        {notification}
      </div>
    );
  }
}

export default App;
