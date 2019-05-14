import React, { Component } from 'react'

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

  render() {
    return (
      <h1>Hello from Register!</h1>
    )
  }
}

export default Register