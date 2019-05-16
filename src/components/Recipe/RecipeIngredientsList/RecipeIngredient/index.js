import React from 'react'
import './recipe-ingredient.module.scss'

const RecipeIngredient = ({ name, quantity }) => (
  <p>{quantity} {name}</p>
)

export default RecipeIngredient