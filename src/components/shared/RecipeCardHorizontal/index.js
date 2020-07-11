import React from 'react';
import PropTypes from 'prop-types';
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
  recipe: PropTypes.shape({
    cook_time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    prep_time: PropTypes.string.isRequired
  }).isRequired
};

export default RecipeCardHorizontal;
