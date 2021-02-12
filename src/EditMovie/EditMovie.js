import React from 'react';

import MovieContext from '../MovieContext';
import GenreList from '../GenreList/GenreList';

import './EditMovie.css';
import '../Form.css';

class EditMovie extends React.Component
{
  static defaultProps = {
    movie: {}
  }

  static contextType = MovieContext;

  constructor(props) {
    super(props);
    this.state = {
      name: props.movie.name,
      description: props.movie.description,
      rating: props.movie.rating,
      genre: props.movie.genre
    }
  }

  onNameChanged = (value) => {
    this.setState({name: value});
  }

  onDescriptionChanged = (value) => {
    this.setState({description: value});
  }
  
  onRatingChanged = (value) => {
    this.setState({rating: parseInt(value)});
  }

  onGenreChanged = (value) => {
    this.setState({genre: value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.context.editMovie({
      id: this.props.movie.id,
      name: this.state.name,
      description: this.state.description,
      rating: this.state.rating,
      genre: this.state.genre,
      owner: this.props.movie.owner
    })
  }

  delete = (e) => {
    e.preventDefault();
    this.context.deleteMovie(this.props.movie.id);
  }

  back = (e) => {
    e.preventDefault();
    window.location = "/movies";
  }

  render() {
    return (
      <div className="EditMovie">
        <div className="FormContainer">
          <form>
            <div className="FormGroup">
              <label htmlFor="name">Name: </label>
              <input 
                id="name" 
                onChange={e => this.onNameChanged(e.target.value)} 
                defaultValue={this.state.name} />
            </div>
            <div className="FormGroup">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                onChange={e => this.onDescriptionChanged(e.target.value)}
                defaultValue={this.state.description} />
            </div>
            <div className="FormGroup">
              <label htmlFor="rating">Rating: </label>
              <select
                id="rating"
                onChange={e => this.onRatingChanged(e.target.value)}
                defaultValue={this.state.rating}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
            </div>
            <div className="FormGroup">
              <label htmlFor="genre">Genre: </label>
              <GenreList 
                id="genre" 
                onChange={e => this.onGenreChanged(e.target.value)} 
                currentlySelected={this.state.genre} />
            </div>
            <hr />
            <div className="FormGroup">
              <button className="btn-success" onClick={this.onSubmit}>Submit</button>
            </div>
            <div className="FormGroup">
              <button className="btn-danger" onClick={this.delete}>Delete</button>
            </div>
            <div className="FormGroup">
              <button className="btn-normal" onClick={this.back}>Back</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditMovie;