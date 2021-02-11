import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ViewMovie from './ViewMovie';

describe('ViewMovie Component', () => {
  it('Should create an instance of ViewMovie without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><ViewMovie /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});