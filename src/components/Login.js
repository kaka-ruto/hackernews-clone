import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'

class Login extends Component {
  state = {
    login: true, // Switch between Loginand signup
    email: '',
    password: '',
    name: '',
  }

  render() {
    const { login, email, password, name } = this.state
    return (
      <div>
        <h4 className="mv3"> { login ? 'Login': 'Sign Up' }</h4>
        <div className="flex flex-column">
          { !login && (
            <input
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Yua nom"
            />
          ) }
          <input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Yua email address"
          />
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Yua strong pass"
          />
        </div>
        <div className="flex mt3">
          <div className="pointer mr2 button" onClick={() => this._confirm()}>
            { login ? 'login' : 'create account' }
          </div>
          <div className="pointer button" onClick={() => this.setState({ login: !login })}>
            {login ? 'Need to create an account?': 'Already have an account?'}
          </div>
        </div>
      </div>
    )
  }

  _confirm = async () => {
    // TODO:mutation to process login data
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login
