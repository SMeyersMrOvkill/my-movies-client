import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MovieList from './MovieList';

describe('MovieList Component', () => {
  it('Should create an instance of MovieList without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><MovieList /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});