import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './recipes-list.module.scss'

import Card from '../Card'
import RecipeCardSmall from '../RecipeCardSmall'

const RecipesList = ({ title, recipes }) => {
  const recipeComponents = recipes.map(recipe => (
    <NavLink key={recipe.id} to={`/recipes/${recipe.id}`}>
      <RecipeCardSmall
        key={recipe.id}
        recipe={recipe}
      />
    </NavLink>
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