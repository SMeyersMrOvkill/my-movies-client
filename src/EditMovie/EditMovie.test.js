import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EditMovie from './EditMovie';

describe('EditMovie Component', () => {
  it('Should create an instance of EditMovie without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><EditMovie /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});