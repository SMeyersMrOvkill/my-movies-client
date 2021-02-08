import React from 'react';
import { Route } from 'react-router-dom';

import config from './config';
import TokenService from './services/token-service';
import MovieContext from './MovieContext';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import MovieList from './MovieList/MovieList';
import ViewMovie from './ViewMovie/ViewMovie';

import './App.css';

class App extends React.Component
{

  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  fetchMovies = () => {
    fetch(`${config.API_ENDPOINT}/movies`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(response => {
      if(response.status === 401) {
        window.location = '/login';
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

  render() {
    return ( 
      <MovieContext.Provider value={{
        movies: this.state.movies,
        fetchMovies: this.fetchMovies
      }}>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/movies" component={MovieList} />
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
      </MovieContext.Provider>
    )
  }
}

export default App;
