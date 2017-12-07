import React, { Component } from 'react';
import { Level, Control, Title, Button } from 'reactbulma';
import axios from 'axios';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    loggedIn: false
  }

  render() {

    let loggedInState = null
    if (!this.state.loggedIn) {
      loggedInState = <div>
                        <LoginForm />
                        <Button> Register </Button>
                      </div>
    } else {
      loggedInState = <div>
                        <p>All Products</p>
                      </div>
    }
    return (
      <div className="App">
      {loggedInState}
      </div>
    );
  }
}

export default App;
