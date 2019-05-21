import React from 'react'
import styles from './recipeCardSmall.module.scss'

import Card from '../Card'

const RecipeCardSmall = ({ recipe }) => {
  return (
    <Card className={styles.recipeCardSmallContainer}>
      <h3>{recipe.name}</h3>
      <img className={styles.recipeImage} src={recipe.img_url} alt='recipe image' />
      <p>{recipe.description}</p>
      <p>{recipe.cook_time}</p>
    </Card>
  )
}

export default RecipeCardSmall