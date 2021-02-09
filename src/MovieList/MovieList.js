import React from 'react';

import MovieContext from '../MovieContext';
import Movie from '../Movie/Movie';
import GenreList from '../GenreList/GenreList';

import './MovieList.css';

class MovieList extends React.Component
{
  static contextType = MovieContext;

  constructor() {
    super();
    this.state = {
      sort: {
        rating: 0,
        genre: 'All'
      }
    };
  }

  componentDidMount() {
    this.context.fetchMovies();
  }

  onGenreChanged = (genre) => {
    this.setState({sort: {rating: this.state.sort.rating, genre}});
  }

  onRatingChanged = (rating) => {
    this.setState({sort: {rating: parseInt(rating), genre: this.state.sort.genre}});
  }

  goToAddMovie = () => {
    window.location = '/movies/add';
  }

  render() {
    return (
      <div className="MovieList">
        <div className="SortContainer">
          <div className="SortOption">
            <button onClick={this.goToAddMovie}>Add Movie</button>
          </div>
          <div className="SortOption">
            <label htmlFor="genre">Genre: </label>
            <GenreList mode="sort" id="genre" onChange={e => this.onGenreChanged(e.target.value)} />
          </div>
          <div className="SortOption">
            <label htmlFor="rating">Rating: </label>
            <select id="rating" onChange={e => this.onRatingChanged(e.target.value)}>
              <option value="0">All</option>
              <option value="2">2 or higher</option>
              <option value="3">3 or higher</option>
              <option value="4">4 or higher</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        {this.context.movies.length > 0 ? 
          this.context.movies.map(movie => {
            if(this.state.sort.genre === 'All' || this.state.sort.genre === movie.genre) {
              if(this.state.sort.rating <= movie.rating) {
                return <Movie movie={movie} view="list" key={movie.name} />
              }
            }
            return <div key={movie.id}></div>;
          })
          : '' }
      </div>
    );
  }
}

export default MovieList;