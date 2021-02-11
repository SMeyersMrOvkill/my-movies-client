import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav Component', () => {
  it('Should create an instance of Nav without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><Nav /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});