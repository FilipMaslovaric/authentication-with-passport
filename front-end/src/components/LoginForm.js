import React, { Component } from 'react';
import axios from 'axios';
import {Level, Control, Title} from 'reactbulma';

export default class LoginForm extends Component {
    state = {
        emailValue: '',
        passwordValue: ''
    }

    handleLoginChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLoginSubmit = (event) => {
        event.preventDefault()

        axios.post('/auth', 
        {
            email: event.state.emailValue,
            password: event.state.passwordValue
        })
    }

    render() {
        return(
            <Level>
                <Control>
                    <Title>Login</Title>
                    <form onSubmit={this.handleLoginSubmit}>
                        <input onChange={this.handleLoginChange} type="email" placeholder="Email" name="email" />
                        <input onChange={this.handleLoginChange} type="password" placeholder="Password" name="password" />
                        <button> Login </button>
                    </form>
                </Control>
            </Level>
    )}
}
