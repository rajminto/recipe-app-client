import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { NavLink } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './recipes-list-scroll.module.scss';

import Card from '../Card';
import RecipeCardHorizontal from '../RecipeCardHorizontal';

const RecipesListScroll = ({ title, recipes, fetchMoreRecipes, moreRecipes }) => {
  const recipeComponents = recipes.map(recipe => (
    <NavLink className={styles.navLink} key={recipe.id} to={`/recipes/${recipe.id}`}>
      <RecipeCardHorizontal key={recipe.id} recipe={recipe} />
    </NavLink>
  ));
  return (
    <Card className={styles.recipesCard}>
      <h2>{title}</h2>
      {recipes.length ? (
        <InfiniteScroll
          className={styles.recipesContainer}
          dataLength={recipes.length}
          next={fetchMoreRecipes}
          hasMore={moreRecipes}
          loader={<h4>Loading...</h4>}
        >
          {recipeComponents}
        </InfiniteScroll>
      ) : (
        <p>No recipes found.</p>
      )}
    </Card>
  );
};

RecipesListScroll.propTypes = {
  fetchMoreRecipes: func.isRequired,
  moreRecipes: bool.isRequired,
  recipes: arrayOf(shape({})).isRequired,
  title: string.isRequired
};

export default RecipesListScroll;
