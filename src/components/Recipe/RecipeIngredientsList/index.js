import React from 'react'
import styles from './recipe-ingredients-list.module.scss'

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
    <div className={styles.ingredientList}>
      <h2>Recipe Ingredients</h2>
      {ingredientComponents}
    </div>
  )
}

export default RecipeIngredientsList