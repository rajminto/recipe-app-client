import React, { Component } from 'react'
import styles from './login.module.scss'
import { Redirect } from 'react-router-dom'

import Button from '../../shared/Button'
import Card from '../../shared/Card'

const baseUrl = 'http://localhost:3000/api'

// TODO?: use context api to control form
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      registrationSuccess: false,
      form: {
        name: '',
        email: '',
        password: '',
        password2: ''
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const user = this.state.form

    this.validatePasswords(user)
      .then(this.submitNewUser)
      .then(res => res.json())
      .then(response => {
        // Registration succeeded: redirect to signup page
        // Registration failed: display response message
        response.success
          ? this.setState({ registrationSuccess: true })
          : this.setState({ message: response.message })
      })
      .catch(err => {
        if (typeof err === 'string') this.setState({ message: err })
      })
  }

  submitNewUser = (user) => {
    return fetch(`${baseUrl}/auth/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }

  // TODO?: improve validation
  validatePasswords = (user) => {
    return new Promise((resolve, reject) => {
      (user.password !== user.password2)
        ? reject('Passwords do not match.')
        : resolve(user)
    })
  }

  render() {
    const { message, registrationSuccess } = this.state

    // TODO: add redirect to profile page on login success

    return (
      <Card className={styles.loginFormContainer}>
        <h1>Login to Account</h1>

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
          <Button text={'Login'} />
        </form>
      </Card>
    )
  }
}

export default Login