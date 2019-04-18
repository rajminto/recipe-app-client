import React from 'react'
import './recipe-ingredient.css'

const RecipeIngredient = ({ name, quantity }) => (
  <p>{quantity} {name}</p>
)

export default RecipeIngredient