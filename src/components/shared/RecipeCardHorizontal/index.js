import React from 'react';
import { shape, string } from 'prop-types';
import styles from './recipe-card-horizontal.module.scss';

import Card from '../Card';

const RecipeCardHorizontal = ({ recipe }) => {
  return (
    <Card className={styles.recipeCardContainer}>
      <h3>{recipe.name}</h3>
      <div className={styles.recipeCardContent}>
        <img className={styles.recipeImage} src={recipe.img_url} alt='recipe' />
        <p>{recipe.description}</p>
        <div>
          <p>Prep: {recipe.prep_time}</p>
          <p>Cook: {recipe.cook_time}</p>
        </div>
      </div>
    </Card>
  );
};

RecipeCardHorizontal.propTypes = {
  recipe: shape({
    cook_time: string.isRequired,
    description: string.isRequired,
    img_url: string.isRequired,
    name: string.isRequired,
    prep_time: string.isRequired
  }).isRequired
};

export default RecipeCardHorizontal;
