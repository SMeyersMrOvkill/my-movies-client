import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GenreList from './GenreList';

describe('GenreList Component', () => {
  it('Should create an instance of GenreList without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><GenreList /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});