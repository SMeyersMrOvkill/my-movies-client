import React from 'react';
import { Link } from 'react-router-dom';

import './Movie.css';

class Movie extends React.Component
{
  render() {
    return (
      <div className="Movie">
        <h1>{this.props.movie.name}</h1>
        {this.props.view === 'list' ? 
          <Link to={'/movies/' + this.props.movie.id + '/view'}>View</Link>
          : <Link to="/movies">Back</Link>
        }
        <p>{this.props.movie.description}</p>
        <p>Rating: {this.props.movie.rating}</p>
        <p>Genre: {this.props.movie.genre}</p>
      </div>
    )
  }
}

export default Movie;