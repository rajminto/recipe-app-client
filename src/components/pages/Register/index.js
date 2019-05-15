import React, { Component } from 'react'
import styles from './register.module.scss'

import Button from '../../shared/Button'

const baseUrl = 'http://localhost:3000/api'

// TODO?: use context api to control form
class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
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
      .then(() => this.submitNewUser(user))
      .then(res => res.json())
      .then(response => {
        this.setState({
          message: response.message
        })
        // TODO: redirect to signup page if successful
        // TODO: clear form if successful
      })
      .catch(err => {
        console.log(err);
        if (typeof err === 'string') {
          this.setState({
            message: err
          })
        }
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

  // TODO: improve validation
  validatePasswords = ({ password, password2 }) => {
    return new Promise((resolve, reject) => {
      (password !== password2)
        ? reject('Passwords do not match.')
        : resolve('valid')
    })
  }

  render() {
    const { message } = this.state
    
    return (
      <div className={`master-form-container ${styles.registerFormContainer}`}>
        <h1>Create an Account</h1>

        {/* TODO: refactor to use a Message component */}
        {message && <h3>{this.state.message}</h3>}

        <form onSubmit={this.handleSubmit} className={styles.registerForm}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />
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
          <label>Repeat Password:</label>
          <input
            type="password"
            name="password2"
            onChange={this.handleChange}
            value={this.state.password2}
            required
            minLength="6"
          />
          <Button text={'Register'}/>
        </form>
      </div>
    )
  }
}

export default Register