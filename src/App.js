import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './Nav/Nav';
import Home from './Home/Home';

import './App.css';

class App extends React.Component
{
  render() {
    return ( 
      <>
        <Nav />
        <Route exact path="/" component={Home} />
      </>
    )
  }
}

export default App;
