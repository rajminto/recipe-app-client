import React from 'react'
import logo from './logo.svg'
import './recipe-header.css'

const RecipeHeader = ({ name, user_name, img_url }) => (
  <div className="recipe-header">
    <h1>{name}</h1>
    <h2>By: {user_name}</h2>
    <img src={logo} className="App-logo" alt="logo" />
  </div>
)

export default RecipeHeader