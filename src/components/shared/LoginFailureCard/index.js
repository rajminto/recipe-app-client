import React, { Component } from 'react'
import styles from './loginFailureCard.module.scss'

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
        <h1> Login Failed</h1>
      </Card>
    )
  }
}

export default LoginFailureCard
