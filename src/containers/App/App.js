import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Main/Main';
import apiService from '../../services/apiService';

/**
 * App component: main container for app, handles API calls
 */
class App extends Component {
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
    };
  }

  /**
   * Load configuration, movie genres, and tv genres
   * on componentWillMount
   */
  componentWillMount() {
    this.setState({
      loading: true
    });

    Promise.all([
      getConfiguration(),
      getMovieGenres(),
      getTvGenres()
    ])
      .then(() => {
        this.setState({
          loading: false
        })
      });
  }

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

  getMovieGenres() {
    return apiService.getMovieGenres().then(data => {
      console.log('Movie genre data:', data);
      this.setState({
        movieGenres: data
      });
    });
  }

  getTvGenres() {
    return apiService.getTvGenres().then(data => {
      console.log('TV genre data:', data);
      this.setState({
        tvGenres: data
      });
    });
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App;
