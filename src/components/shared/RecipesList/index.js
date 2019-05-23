import React from 'react'
import styles from './recipes-list.module.scss'

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
    <Card className={styles.recipesCard}>
      <h2>{title}</h2>
      <div className={styles.recipesContainer}>
        {recipeComponents}
      </div>
    </Card>
  )
}

export default RecipesList