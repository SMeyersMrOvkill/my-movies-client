import React from 'react';

class GenreList extends React.Component
{
  static defaultProps = {
    mode: 'list',
    onChange: (value) => {},
    currentlySelected: 'Drama'
  }

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
    this.genres = genres;
  }

  render() {
    return (
        <select id={this.props.id} onChange={this.props.onChange} defaultValue={this.props.currentlySelected}>
        {this.genres.map(genre => {
          return <option key={genre} value={genre}>{genre}</option>
        })}
      </select>
    )
  }
}

export default GenreList;