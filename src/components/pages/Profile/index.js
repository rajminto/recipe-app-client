import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import styles from './profile.module.scss'

import Button from '../../shared/Button'
import Card from '../../shared/Card'
import LoginFailureCard from '../../shared/LoginFailureCard'

// TODO: store user/loggedIn information in context api
class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginFailure: false,
      isLoaded: false,
      user: {
        id: 0,
        name: '',
        email: ''
      },
      recipes: []
    }
  }

  componentDidMount() {
    this.ensureAuthenticted()
  }

  ensureAuthenticted = () => {
    fetch('http://localhost:3000/api/auth/test', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(response => {
        response.user
          ? this.setState({ isLoaded: true, user: response.user })
          : this.setState({ isLoaded: true, loginFailure: true })
      })
      .catch(console.error)
  }

  render() {
    const { loginFailure, isLoaded, user } = this.state

    // TODO: create and use spinner/loader component here
    if (!isLoaded) return <h1>Loading...</h1>

    // Login Failed: present options to register or login
    if (loginFailure) return <LoginFailureCard />

    return (
      <Card className={styles.profileHeaderContainer}>
        <h1>Profile - {user.name}</h1>
        <p>Welcome! From here you can:</p>
        <ul>
          <li>Create new recipes</li>
          <li>View recipes you have created</li>
          <li>Edit recipes you have created</li>
          <li>Delete recipes you have created</li>
        </ul>
      </Card>
    )
  }
}

export default Profile