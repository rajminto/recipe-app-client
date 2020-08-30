import React from 'react';
import { shape, string } from 'prop-types';
import styles from './recipe-card-small.module.scss';

import Card from '../Card';

const RecipeCardSmall = ({ recipe }) => {
  return (
    <Card className={styles.recipeCardSmallContainer}>
      <h3>{recipe.name}</h3>
      <img className={styles.recipeImage} src={recipe.img_url} alt='recipe' />
      <p>Prep: {recipe.prep_time}</p>
      <p>Cook: {recipe.cook_time}</p>
    </Card>
  );
};

RecipeCardSmall.propTypes = {
  recipe: shape({
    cook_time: string.isRequired,
    img_url: string.isRequired,
    name: string.isRequired,
    prep_time: string.isRequired
  }).isRequired
};

export default RecipeCardSmall;
