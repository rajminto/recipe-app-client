import React, { Component } from 'react';
import styles from './login.module.scss';
import { Redirect } from 'react-router-dom';

import Button from '../../shared/Button';
import Card from '../../shared/Card';
import CheckAnimation from '../../shared/CheckAnimation';

import { baseUrl } from '../../../api';

// TODO?: use context api to control form
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      loginSuccess: false,
      formValid: false,
      form: {
        email: '',
        password: ''
      }
    };
  }

  handleChange = e => {
    this.setState(
      {
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value
        }
      },
      () => this.isFormValid()
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = this.state.form;

    this.submitUser(user)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        // Login succeeded: redirect to signup page
        // Login failed: display response message
        response.success
          ? this.setState({ loginSuccess: true })
          : this.setState({ message: response.message });
      })
      .catch(err => {
        if (typeof err === 'string') this.setState({ message: err });
      });
  };

  isFormValid = () => {
    if (this.state.form.password.length > 5 && this.state.formValid === false) {
      this.setState({ formValid: true });
    } else if (
      this.state.form.password.length <= 5 &&
      this.state.formValid === true
    ) {
      this.setState({ formValid: false });
    }
  };

  submitUser = user => {
    return fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify(user)
    });
  };

  render() {
    const { message, loginSuccess, formValid } = this.state;

    if (loginSuccess) return <Redirect to="/profile" />;
    // console.log('render from parent')
    return (
      <Card className={styles.loginFormContainer}>
        <div className={styles.validator}>
          <h1>Login to Account</h1>
          <CheckAnimation formValid={formValid} />
        </div>

        {/* TODO: refactor to use a Message component */}
        {message && <h3>{this.state.message}</h3>}

        <form onSubmit={this.handleSubmit} className={styles.loginForm}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
            minLength="6"
          />
          <Button text="Login" />
        </form>
      </Card>
    );
  }
}

export default Login;
