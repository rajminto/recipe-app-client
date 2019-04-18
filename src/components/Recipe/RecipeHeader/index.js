import React, { Fragment } from 'react'
import logo from './logo.svg'
import './recipe-header.css'

const RecipeHeader = ({ name, user_name, img_url }) => (
  <Fragment>
    <h1>{name}</h1>
    <h2>By: {user_name}</h2>
    <img src={logo} className="App-logo" alt="logo" />
  </Fragment>
)

export default RecipeHeader