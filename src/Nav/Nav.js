import React from 'react';
import { Link } from 'react-router-dom';

import TokenService from '../services/token-service';

import './Nav.css';

class Nav extends React.Component
{

  logout = () => {
    window.localStorage.clear();
    window.location = '/login';
  }

  render() {
    return (
      <header>
        <h1>My Movies</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {TokenService.hasAuthToken() ? 
              <>
                <li><Link to="/movies">Movies</Link></li>
                <li><a href="/" onClick={this.logout}>Log out</a></li>
              </> :
              <>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
            }
          </ul>
        </nav>
      </header>
    )
  }
}

export default Nav;