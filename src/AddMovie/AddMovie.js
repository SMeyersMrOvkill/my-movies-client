import React from 'react';

import MovieContext from '../MovieContext';
import GenreList from '../GenreList/GenreList';

import './AddMovie.css';
import '../Form.css';

class AddMovie extends React.Component
{
  static contextType = MovieContext;

  constructor() {
    super();
    this.state = {
      name: {
        value: '',
        touched: false,
      },
      description: {
        value: '',
        touched: false,
      },
      rating: {
        value: 0,
      },
      genre: {
        value: '',
        touched: false,
      }
    };
  }

  onNameChanged = (value) => {
    this.setState({name: {value, touched: true}});
  }

  onDescriptionChanged = (value) => {
    this.setState({description: {value, touched: true}});
  }
  
  onRatingChanged = (value) => {
    this.setState({rating: {value: parseInt(value)}});
  }

  onGenreChanged = (value) => {
    this.setState({genre: {value, touched: true}});
  }

  allValuesEntered = () => {
    return (
      this.state.name.touched &&
      this.state.description.touched &&
      this.state.genre.touched
    );
  }

  submit = (e) => {
    e.preventDefault();
    this.context.addMovie({
      name: this.state.name.value,
      description: this.state.description.value,
      rating: this.state.rating.value,
      genre: this.state.genre.value
    })
  }

  back = (e) => {
    e.preventDefault();
    window.location = "/movies";
  }

  render() {
    return (
      <div className="AddMovie">
        <div className="FormContainer">
          <form>
            <div className="FormGroup">
              <label htmlFor="name">Name: </label>
              <input id="name" onChange={e => this.onNameChanged(e.target.value)} />
            </div>
            <div className="FormGroup">
              <label htmlFor="description">Description: </label>
              <textarea id="description" onChange={e => this.onDescriptionChanged(e.target.value)} />
            </div>
            <div className="FormGroup">
              <label htmlFor="rating">Rating: </label>
              <select id="rating" onChange={e => this.onRatingChanged(e.target.value)}>
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
                onChange={e => this.onGenreChanged(e.target.value)} />
            </div>
            <hr />
            <div className="FormGroup">
              <button
              className="btn-success"
              disabled={!this.allValuesEntered()} 
              onClick={this.submit}>Submit</button>
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

export default AddMovie;