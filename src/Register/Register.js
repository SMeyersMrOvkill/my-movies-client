import React from 'react';

import config from '../config';
import AuthApiService from '../services/auth-api-service';

import '../Form.css';
import './Register.css';

class Register extends React.Component
{

  constructor() {
    super();
    this.state = {
      user_name: {
        value: '',
        touched: false
      },
      full_name: {
        value: '',
        touched: false,
      },
      password: {
        value: '',
        touched: false
      }
    };
  }

  onUserNameChanged = (value) => {
    this.setState({user_name: {value, touched: true}});
  }

  onFullNameChanged = (value) => {
    this.setState({full_name: {value, touched: true}});
  }

  onPasswordChanged = (value) => {
    this.setState({password: {value, touched: true}});
  }

  validateFormData = () => {
    return (
      this.state.user_name.touched && 
      this.state.user_name.value !== '' &&
      this.state.full_name.touched &&
      this.state.full_name.value !== '' &&
      this.state.password.touched &&
      this.state.password.value !== ''
    );
  }

  submitRegistration = (e) => {
    e.preventDefault();
    fetch(`${config.API_ENDPOINT}/auth/register`, {
      method: 'POST',
      headers: {
          'content-type': "application/json"
      },
      body: JSON.stringify({
          user_name: this.state.user_name.value,
          full_name: this.state.full_name.value,
          password: this.state.password.value
      })
    }).then((response) => {
        return response.json();
    }).then((data) => {
        if(data.status !== 0) {
            this.setState({error: data.message});
        } else {
          AuthApiService.postLogin({
            user_name: this.state.user_name.value,
            password: this.state.password.value,
          })
          .then(res => {
            window.location = '/movies';
          })
          .catch(res => {
            this.setState({ error: res.error })
          })
        }
    });
  }

  render() {
    return (
      <div className="Register">
        <div className="FormContainer">
          <form>
            <div className="FormGroup">
              <label htmlFor="user_name">Username: </label>
              <input id="user_name" onChange={e => this.onUserNameChanged(e.target.value)} />
            </div>
            <div className="FormGroup">
              <label htmlFor="full_name">Full Name: </label>
              <input id="full_name" onChange={e => this.onFullNameChanged(e.target.value)} />
            </div>
            <div className="FormGroup">
              <label htmlFor="password">Password: </label>
              <input id="password" type="password" onChange={e => this.onPasswordChanged(e.target.value)} />
            </div>
            <hr />
            <div className="FormGroup">
              <button
                disabled={!this.validateFormData()}
                onClick={this.submitRegistration}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Register;