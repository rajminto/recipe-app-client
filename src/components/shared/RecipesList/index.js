import React from 'react'
import styles from './recipesList.module.scss'

import Card from '../Card'
import RecipeCardSmall from '../RecipeCardSmall'

const RecipesList = ({ title, recipes }) => {
  const recipeComponents = recipes.map(recipe => (
    <RecipeCardSmall
      key={recipe.id}
      recipe={recipe}
    />
  ))
  return (
    <Card className={styles.createdRecipesCard}>
      <h2>{title}</h2>
      <div className={styles.createdRecipesContainer}>
        {recipeComponents}
      </div>
    </Card>
  )
}

export default RecipesList