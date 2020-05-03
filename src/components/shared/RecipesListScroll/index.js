import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './recipes-list-scroll.module.scss';

import Card from '../Card';
import RecipeCardHorizontal from '../RecipeCardHorizontal';
import InfiniteScroll from 'react-infinite-scroll-component';

const RecipesListScroll = ({
  title,
  recipes,
  fetchMoreRecipes,
  moreRecipes
}) => {
  const recipeComponents = recipes.map(recipe => (
    <NavLink
      className={styles.navLink}
      key={recipe.id}
      to={`/recipes/${recipe.id}`}
    >
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

export default RecipesListScroll;
