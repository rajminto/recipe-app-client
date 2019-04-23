import React from 'react'
import './recipe-ingredients-list.css'

// Component Imports
import RecipeIngredient from './RecipeIngredient'

const RecipeIngredientsList = ({ ingredients }) => {
  const ingredientComponents = ingredients.map(ingredient => (
    <RecipeIngredient
      key={ingredient.id}
      name={ingredient.name}
      quantity={ingredient.quantity}
    />
  ))

  return (
    <div>
      <h2>Recipe Ingredients</h2>
      {ingredientComponents}
    </div>
  )
}

export default RecipeIngredientsList