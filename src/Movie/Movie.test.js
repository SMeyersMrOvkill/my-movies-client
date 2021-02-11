import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Movie from './Movie';

describe('Movie Component', () => {
  it('Should create an instance of Movie without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><Movie /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});