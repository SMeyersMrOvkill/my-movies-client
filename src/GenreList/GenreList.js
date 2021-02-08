import React from 'react';

class GenreList extends React.Component
{
  constructor(props) {
    super(props);
    let genres = [
      'Drama',
      'Comedy',
      'Science Fiction',
      'Romance',
      'Romantic Comedy',
      'Action',
      'Adventure',
      'Horror',
      'Superhero',
      'Thriller',
      'Mystery',
      'Biopic',
      'Fantasy',
      'Animation',
      'Crime'
    ];
    if(props.mode === 'sort') {
      genres = ['All', ...genres];
    }
    this.state = {
      genres
    }
  }

  render() {
    return (
      <select id={this.props.id} onChange={this.props.onChange}>
        {this.state.genres.map(genre => {
          return <option key={genre} value={genre}>{genre}</option>
        })}
      </select>
    )
  }
}

export default GenreList;