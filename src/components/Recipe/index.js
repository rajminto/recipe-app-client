import React from 'react'
import logo from '../../logo.svg'
import './recipe.css'

// Component Imports
import TagsList from './TagsList'
import RecipeHeader from './RecipeHeader'


const Recipe = ({ recipe }) => {
  const { 
    name,
    description,
    img_url,
    prep_time,
    cook_time,
    user_name,
    instructions,
    ingredients,
    tags
  } = recipe

  return (
    <div>
      <h1>{name}</h1>
      <h2>By: {user_name}</h2>
      <img src={logo} className="App-logo" alt="logo" />

    </div>
  )
}

export default Recipe