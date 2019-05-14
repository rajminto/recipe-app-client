import React, { Component, Fragment } from 'react'
import styles from './register.module.scss'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitting...');
    
  }

  render() {
    return (
      <div className={`master-form-container ${styles.registerFormContainer}`}>
        <h1>Create an Account</h1>
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
          <label>Password Check:</label>
          <input
            type="password"
            name="password2"
            onChange={this.handleChange}
            value={this.state.password2}
            required
            minLength="6"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Register