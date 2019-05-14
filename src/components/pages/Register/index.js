import React, { Component, Fragment } from 'react'

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
      <Fragment>
        <h1>Create an Account</h1>
        <form onSubmit={this.handleSubmit} >
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
          />
          <label>Password Check:</label>
          <input
            type="password"
            name="password2"
            onChange={this.handleChange}
            value={this.state.password2}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </Fragment>
    )
  }
}

export default Register