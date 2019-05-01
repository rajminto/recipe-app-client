import React from 'react'
import styles from './recipe-description.module.scss'

const RecipeDescription = ({ description, prep_time, cook_time }) => {
  return (
    <div className={styles.recipeDescription}>
      <h2>Recipe Description</h2>
      <p>{description}</p>
      <div className={styles.recipeTimesContainer}>
        <p>Prep Time: {prep_time}</p>
        <p>Cook Time: {cook_time}</p>
      </div>
    </div>
  )
}

export default RecipeDescription