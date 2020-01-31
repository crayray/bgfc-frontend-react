import React, { Component } from 'react'
import { SignUpForm, SignInForm } from '../../components/LoginForm'
import { Overlay } from '../../components/LoginOverlay'
import "./Login.css";

export default class Login extends Component {
  render() {
    // const { errors } = this.state;

    return (
      <div>
        <div className="container" id="container">
          <SignUpForm
            // errors={errors}
            // handleErrors={this.handleErrors}
            // handleSubmit={this.handleSubmit}
          />
          <SignInForm
            // errors={errors}
            // handleErrors={this.handleErrors}
            // handleSubmit={this.handleSubmit}
          />
          <Overlay />
        </div>
      </div>
    );
  }
}
