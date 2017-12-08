import React, { Component } from 'react';
import decodeJWT from 'jwt-decode'

import SignIn from './components/SignIn';
import RegisterForm from './components/RegisterForm'
import { api, setJWT } from './api/init'

import './App.css';

class App extends Component {

  state= {
    token: localStorage.getItem('token'),
    loginError: null,
    registerError: null,
    isRegistering: false
  }

  handleSignIn = async (event) => {
    event.preventDefault()
    const form = event.target
    const elements = form.elements

    try {
      const response = await api.post('/auth', {
        email: elements.email.value,
        password: elements.password.value
      })
      this.setState({
        token: response.data.token
      })

      setJWT(response.data.token)

    } catch (error) {
      this.setState({
        loginError: error.message
      })
      console.log(error)
    }
  }

  handleRegisterForm = (event) => {
    event.preventDefault()
    this.setState({
      isRegistering: !this.state.isRegistering
    })
  }

  handleRegisterSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    const elements = form.elements

    if (elements.password.value === elements.confirmPassword.value) {
      try {
        const response = await api.post('/auth/register', {
          firstNAme: elements.firstName.value,
          lastNAme: elements.lastName.value,
          email: elements.email.value,
          password: elements.password.value
        })
        this.setState({
          token: response.data.token,
          registerError: null
        })

        setJWT(response.data.token)

      } catch (error) {
        this.setState({
          registerError: error.message
        })
        console.log(error)
      }
    } else {
      alert('Please make sure passwords match!')
    }
  }

  render() {
    const tokenDetails = this.state.token && decodeJWT(this.state.token)

    let displayFormHTML = null

    if (!this.state.isRegistering) {
      displayFormHTML = <SignIn loginError={this.state.loginError} handleSignIn={this.handleSignIn} handleRegisterForm={this.handleRegisterForm} />
    } else {
      displayFormHTML = <RegisterForm handleRegisterSubmit={this.handleRegisterSubmit} registerError={this.state.registerError}/>
    }

    return (
      <div className="App">
      {this.state.token ? (
        <p>Welcome {tokenDetails.email}! <br />
        You logged in at: {new Date(tokenDetails.iat * 1000).toLocaleString()}! <br />
        Your token expires at: {new Date(tokenDetails.exp * 1000).toLocaleString()}! <br />
        </p>
      ) : (
        displayFormHTML
      )}
      </div>
    );
  }

  componentDidMount () {
    this.state.token && decodeJWT(this.state.token)
  }

}

export default App;
