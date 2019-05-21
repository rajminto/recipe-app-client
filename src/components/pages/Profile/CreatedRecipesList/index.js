import React from 'react'
import styles from './createdRecipesList.module.scss'

import Card from '../../../shared/Card'
import RecipeCardSmall from '../../../shared/RecipeCardSmall'

const CreatedRecipesList = ({ recipes }) => {
  const recipeComponents = recipes.map(recipe => (
    <RecipeCardSmall recipe={recipe} />
  ))
  return (
    <Card>
      <h2>Created Recipes</h2>
      <div className={styles.createdRecipesContainer}>
        {recipeComponents}
      </div>
    </Card>
  )
}

export default CreatedRecipesList