import React from 'react'
import styles from './search-recipes-header.module.scss'

import Card from '../../../shared/Card'

const SearchRecipesHeader = ({ ingredientSearch, handleChange }) => {
  return (
    <Card className={styles.headerContainer}>
      <h1>Search Recipes</h1>
      <p>Enter a search term below to search for recipes.</p>
      <form>
        <label htmlFor="">Ingredient:</label>
        <input 
          type="text"
          name="ingredientSearch"
          value={ingredientSearch}
          onChange={handleChange}
        />
      </form>
    </Card>
  )
}

export default SearchRecipesHeader
