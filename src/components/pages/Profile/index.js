import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import styles from './profile.module.scss'

import Button from '../../shared/Button'
import Card from '../../shared/Card'
import LoginFailureCard from '../../shared/LoginFailureCard'
import Loader from '../../shared/Loader'

import CreatedRecipesList from './CreatedRecipesList'

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
      .then(user => {
        if (user) return fetch(`http://localhost:3000/api/users/${user.id}/recipes`)
      })
      .then(res => res.json())
      .then(({recipes}) => this.setState({ recipes }))
      .catch(console.log)
  }

  ensureAuthenticted = () => {
    return fetch('http://localhost:3000/api/auth/test', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(response => {
        if (response.user) {
          this.setState({ isLoaded: true, user: response.user })
          return response.user
        } else {
          this.setState({ isLoaded: true, loginFailure: true })
          return false
        }
      })
      .catch(console.error)
  }

  render() {
    const { loginFailure, isLoaded, user, recipes } = this.state

    // TODO: create and use spinner/loader component here
    if (!isLoaded) return <Loader />

    // Login Failed: present options to register or login
    if (loginFailure) return <LoginFailureCard />

    return (
      <div className={styles.profileContainer}>
      <Card className={styles.profileHeaderContainer}>
        <h1>Profile - {user.name}</h1>
        <p>Welcome! From here you can:</p>
        <ul>
          <li>Create new recipes</li>
          <li>Edit recipes you have created</li>
          <li>Delete recipes you have created</li>
          <li>View recipes you have created and saved</li>
        </ul>
      </Card>
      <CreatedRecipesList recipes={recipes} />
      </div>
    )
  }
}

export default Profile