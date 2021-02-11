import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddMovie from './AddMovie';

describe('AddMovie Component', () => {
  it('Should create an instance of AddMovie without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><AddMovie /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});