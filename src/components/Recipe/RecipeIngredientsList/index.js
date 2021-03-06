import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import styles from './recipe-ingredients-list.module.scss';

// Component imports
import RecipeIngredient from './RecipeIngredient';
import Card from '../../shared/Card';

const RecipeIngredientsList = ({ ingredients }) => {
  const ingredientComponents = ingredients.map(ingredient => (
    <RecipeIngredient key={ingredient.id} name={ingredient.name} />
  ));

  return (
    <Card className={styles.ingredientsListContainer}>
      <h2>Ingredients</h2>
      <Card className={styles.ingredientsListCard}>{ingredientComponents}</Card>
    </Card>
  );
};

RecipeIngredientsList.propTypes = {
  ingredients: arrayOf(
    shape({
      name: string.isRequired,
      id: number.isRequired
    })
  ).isRequired
};

export default RecipeIngredientsList;
