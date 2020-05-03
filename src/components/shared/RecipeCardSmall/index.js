import React from 'react';
import PropTypes from 'prop-types';
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
  recipe: PropTypes.shape({
    cook_time: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    prep_time: PropTypes.string.isRequired
  }).isRequired
};

export default RecipeCardSmall;
