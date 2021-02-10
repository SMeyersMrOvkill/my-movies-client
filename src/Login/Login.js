import React from 'react';

import AuthApiService from '../services/auth-api-service';

import '../Form.css';
import './Login.css';

class Login extends React.Component
{

  constructor() {
    super();
    this.state = {
      user_name: {
        value: '',
        touched: false
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

  onPasswordChanged = (value) => {
    this.setState({password: {value, touched: true}});
  }

  validateFields() {
    return (
        this.state.password.touched &&
        this.state.password.value !== "" && 
        this.state.user_name.touched &&
        this.state.user_name.value !== ""
    );
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const user_name = this.state.user_name;
    const password = this.state.password;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
    .then(res => {
      user_name.value = ''
      password.value = ''
      window.location = '/movies';
    })
    .catch(res => {
      this.setState({ error: res.error })
    })
  }

  render() {
    return (
      <div className="Login">
        <div className="FormContainer">
          <form>
            <div className="FormGroup">
              <label htmlFor="user_name">Username: </label>
              <input id="user_name" onChange={e => this.onUserNameChanged(e.target.value)} />
            </div>
            <div className="FormGroup">
              <label htmlFor="password">Password: </label>
              <input id="password" type="password" onChange={e => this.onPasswordChanged(e.target.value)} />
            </div>
            <hr />
            <button 
              disabled={!this.validateFields()} 
              onClick={this.handleSubmitJwtAuth} >Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;