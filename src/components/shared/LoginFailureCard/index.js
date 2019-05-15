import React, { Component } from 'react'
import styles from './loginFailureCard.module.scss'
import { NavLink } from 'react-router-dom';

import Card from '../Card'
import Button from '../Button'

class LoginFailureCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectToLogin: false,
      redirectToRegister: false
    }
  }

  render() {
    return (
      <Card className={styles.loginFailureContainer}>
        <h1>Login Failed</h1>
        <p>Please login or register a new account.</p>
        <div className={styles.buttonContainer}>
          <NavLink to='/login'><Button text='Login'/></NavLink>
          <NavLink to='/register'><Button text='Register' /></NavLink>
        </div>
      </Card>
    )
  }
}

export default LoginFailureCard
