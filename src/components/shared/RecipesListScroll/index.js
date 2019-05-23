import React from 'react'
import styles from './recipes-list-scroll.module.scss'

import Card from '../Card'
import RecipeCardHorizontal from '../RecipeCardHorizontal'
import InfiniteScroll from 'react-infinite-scroll-component'

const RecipesListScroll = ({ title, recipes, fetchRecipes, moreRecipes }) => {
  const recipeComponents = recipes.map(recipe => (
    <RecipeCardHorizontal
      key={recipe.id}
      recipe={recipe}
    />
  ))
  return (
    <Card className={styles.recipesCard}>
      <h2>{title}</h2>
      <InfiniteScroll
        className={styles.recipesContainer}
        dataLength={recipes.length}
        next={fetchRecipes}
        hasMore={moreRecipes}
        loader={<h4>Loading...</h4>}
      >
        {recipeComponents}
      </InfiniteScroll>
    </Card>
  )
}

export default RecipesListScroll