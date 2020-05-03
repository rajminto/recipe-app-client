import React from 'react';
import styles from './recipe-card-horizontal.module.scss';

import Card from '../Card';

const RecipeCardHorizontal = ({ recipe }) => {
  return (
    <Card className={styles.recipeCardContainer}>
      <h3>{recipe.name}</h3>
      <div className={styles.recipeCardContent}>
        <img className={styles.recipeImage} src={recipe.img_url} alt="recipe" />
        <p>{recipe.description}</p>
        <div>
          <p>Prep: {recipe.prep_time}</p>
          <p>Cook: {recipe.cook_time}</p>
        </div>
      </div>
    </Card>
  );
};

export default RecipeCardHorizontal;
