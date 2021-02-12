import React from 'react';
import { Link, Route } from 'react-router-dom';

import config from './config';
import TokenService from './services/token-service';
import MovieContext from './MovieContext';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import MovieList from './MovieList/MovieList';
import ViewMovie from './ViewMovie/ViewMovie';
import AddMovie from './AddMovie/AddMovie';
import EditMovie from './EditMovie/EditMovie';

import './App.css';
import './Theme.css';

class App extends React.Component
{

  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  /**
   * Redirects the user to the login page when the curent token is expired.
   */
  onUnauthorizedError = () => {
    window.location = '/login';
    this.setState({movies: []});
  }

  /**
   * Retrieves the list of movies from the server.
   * Requires authorization.
   */
  fetchMovies = () => {
    fetch(`${config.API_ENDPOINT}/movies`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(response => {
      if(response.status === 401) {
        this.onUnauthorizedError();
        return [];
      } else {
        return response.json();
      }
    }).then(movies => {
      this.setState({movies});
    }).catch(error => {
      console.log(error);
    })
  }

  /**
   * Sends a POST request to the /api/movies/add route to insert a given movie into the list.
   * Requires authorization.
   * @param {Movie} movie 
   */
  addMovie = (movie) => {
    fetch(`${config.API_ENDPOINT}/movies/add`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(movie)
    }).then(response => {
      if(response.status === 401) {
        this.onUnauthorizedError();
      } else if(response.status === 200) {
        window.location = '/movies';
      } else {
        console.log('Unknown response code on addMovie');
      }
    }).catch(error => {
      console.error(error);
    });
  }

  /**
   * Sends a PUT request to the /api/movies/:movieId/update route to update a given movie.
   * Requires authorization.
   * @param {Movie} movie 
   */
  editMovie = (movie) => {
    fetch(`${config.API_ENDPOINT}/movies/${movie.id}/update`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(movie)
    }).then(response => {
      if(response.status === 401) {
        this.onUnauthorizedError();
      } else if(response.status === 201) {
        window.location = '/movies';
      } else {
        console.log('Unknown response code on addMovie');
      }
    }).catch(error => {
      console.error(error);
    });
  }

  /**
   * Sends a request to /api/movies/:movieId/delete to delete a movie with the given movieId.
   * Requires authorization.
   * @param {number} movieId 
   */
  deleteMovie = (movieId) => {
    fetch(`${config.API_ENDPOINT}/movies/${movieId}/delete`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
    }).then(response => {
      if(response.status === 401) {
        this.onUnauthorizedError();
      } else if(response.status === 201) {
        window.location = '/movies';
      } else {
        console.log('Unknown response code on addMovie');
      }
    }).catch(error => {
      console.error(error);
    });
  }

  /**
   * Renders all components according to route and inserts data/methods into context.
   */
  render() {
    return ( 
      <MovieContext.Provider value={{
        movies: this.state.movies,
        fetchMovies: this.fetchMovies,
        addMovie: this.addMovie,
        editMovie: this.editMovie,
        deleteMovie: this.deleteMovie
      }}>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/movies" component={MovieList} />
        <Route exact path="/movies/add" component={AddMovie} />
        <Route exact path="/movies/:id/view" render={routeProps => {
          const { id } = routeProps.match.params;
          let foundMovie = {};
          this.state.movies.forEach(movie => {
            if(parseInt(movie.id) === parseInt(id)) {
              foundMovie = movie;
            }
          });
          return <ViewMovie movie={foundMovie} />
        }} />
        <Route exact path="/movies/:id/edit" render={routeProps => {
          const { id } = routeProps.match.params;
          let foundMovie = {};
          this.state.movies.forEach(movie => {
            if(parseInt(movie.id) === parseInt(id)) {
              foundMovie = movie;
            }
          });
          if(foundMovie) {
            return <EditMovie movie={foundMovie} />
          } else {
            return <p>An error occurred. <Link to="/movies">Back to Movies</Link></p>
          }
        }} />
      </MovieContext.Provider>
    )
  }
}

export default App;
