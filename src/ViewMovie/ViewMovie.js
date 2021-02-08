import React from 'react';

import MovieContext from '../MovieContext';
import Movie from '../Movie/Movie';

import './ViewMovie.css';

class ViewMovie extends React.Component
{
  static contextType = MovieContext;

  render() {
    return (
      <div className="ViewMovie">
        <Movie movie={this.props.movie} view="full" />
      </div>
    );
  }
}

export default ViewMovie;