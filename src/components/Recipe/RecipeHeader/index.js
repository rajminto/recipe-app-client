import React from 'react'
import styles from './recipe-header.module.scss'

import Card from '../../shared/Card'

const RecipeHeader = ({ name, user_name, img_url }) => (
  <Card className={styles.recipeHeaderContainer}>
    <div className={styles.title}>
      <h1>{name}</h1>
      <h3>By: {user_name}</h3>
    </div>
    <div className={styles.cardsContainer}>
      <Card className={styles.headerCard}>
        <img src={img_url} className={styles.recThumb} alt="food_pic" />
      </Card>
      <Card className={styles.headerCard}>
        <img src={img_url} className={styles.recThumb} alt="food_pic" />
      </Card>
      <Card className={styles.headerCard}>
        <img src={img_url} className={styles.recThumb} alt="food_pic" />
      </Card>
    </div>
  </Card>
)

export default RecipeHeader