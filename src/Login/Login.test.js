import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';

describe('Login Component', () => {
  it('Should create an instance of Login without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><Login /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});