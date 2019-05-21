import React, { Component } from 'react'
import styles from './profile.module.scss'

import ProfileHeader from './ProfileHeader'
import Card from '../../shared/Card'
import LoginFailureCard from '../../shared/LoginFailureCard'
import Loader from '../../shared/Loader'
import RecipesList from '../../shared/RecipesList'

// TODO: store user/loggedIn information in context api
class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginFailure: false,
      isLoaded: false,
      user: {},
      createdRecipes: [],
      savedRecipes: []
    }
  }

  componentDidMount() {
    this.ensureAuthenticted()
      .then(this.checkForUser)
      .then(this.fetchUserRecipes)
      .then(this.setRecipesOnState)
      .catch(err => {
        if (err.message === 'no user') this.setState({ isLoaded: true, loginFailure: true })
        else console.log(err)
      })
  }

  ensureAuthenticted = () => {
    return fetch('http://localhost:3000/api/auth/test', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
  }

  checkForUser = ({ user }) => {
    if (!user) throw new Error('no user')
    this.setState({ user })
    return user
  }

  fetchUserRecipes = (user) => {
    return fetch(`http://localhost:3000/api/users/${user.id}/recipes`)
      .then(res => res.json())
  }

  setRecipesOnState = ({ recipes }) => {
    const createdRecipes = recipes.filter(recipe => recipe.userRecipes.createdBy)
    const savedRecipes = recipes.filter(recipe => !recipe.userRecipes.createdBy)
    this.setState({ isLoaded: true, createdRecipes, savedRecipes })
  }

  render() {
    const { loginFailure, isLoaded, user, createdRecipes, savedRecipes } = this.state

    // TODO: create and use spinner/loader component here
    if (!isLoaded) return <Loader />

    // Login Failed: present options to register or login
    if (loginFailure) return <LoginFailureCard />

    return (
      <div className={styles.profileContainer}>
      <ProfileHeader user={user} />
      {createdRecipes.length
        // TODO: If no recipes, show button to create
        ? <RecipesList title={'Created Recipes'} recipes={createdRecipes} />
        : <Card><h2>No created recipes currently.</h2></Card>
      }
      {savedRecipes.length
        ? <RecipesList title={'Saved Recipes'} recipes={savedRecipes} />
        : <Card><h2>No saved recipes currently.</h2></Card>
      }
      </div>
    )
  }
}

export default Profile