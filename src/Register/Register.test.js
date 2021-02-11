import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Register from './Register';

describe('Register Component', () => {
  it('Should create an instance of Register without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><Register /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});