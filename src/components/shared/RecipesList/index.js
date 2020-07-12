import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './recipes-list.module.scss';

import Card from '../Card';
import RecipeCardSmall from '../RecipeCardSmall';

const RecipesList = ({ title, recipes }) => {
  const recipeComponents = recipes?.map(recipe => (
    <NavLink className={styles.navLink} key={recipe.id} to={`/recipes/${recipe.id}`}>
      <RecipeCardSmall recipe={recipe} />
    </NavLink>
  ));
  return (
    <Card className={styles.recipesCard}>
      <h2>{title}</h2>
      <div className={styles.recipesContainer}>{recipeComponents}</div>
    </Card>
  );
};

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  title: PropTypes.string.isRequired
};

export default RecipesList;
