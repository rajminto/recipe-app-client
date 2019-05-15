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
      loginSuccess: false,
      form: {
        email: '',
        password: ''
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

    this.submitUser(user)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        // Login succeeded: redirect to signup page
        // Login failed: display response message
        response.success
          ? this.setState({ loginSuccess: true })
          : this.setState({ message: response.message })
      })
      .catch(err => {
        if (typeof err === 'string') this.setState({ message: err })
      })
  }

  submitUser = (user) => {
    return fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }

  render() {
    const { message, loginSuccess } = this.state

    if (loginSuccess) return <Redirect to='/profile' />

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