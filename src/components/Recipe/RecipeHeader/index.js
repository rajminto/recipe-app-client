import React from 'react'
import styles from './recipe-header.module.scss'

const RecipeHeader = ({ name, user_name, img_url }) => (
  <div className={styles.recipeHeader}>
    <h1>{name}</h1>
    <h2>By: {user_name}</h2>
    <div className={styles.thumbContainer}>
      <img src={img_url} className={styles.recThumb} alt="food_pic" />
    </div>
  </div>
)

export default RecipeHeader