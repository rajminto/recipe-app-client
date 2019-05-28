import React from 'react'
import styles from './search-recipes-header.module.scss'

import Card from '../../../shared/Card'
import Button from '../../../shared/Button'

const SearchRecipesHeader = ({ searchQuery, handleChange, handleSubmit }) => {
  return (
    <Card className={styles.headerContainer}>
      <h1>Search Recipes</h1>
      <p>Enter a search term below to search for recipes.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Ingredient:</label>
        <input 
          type='text'
          name='searchQuery'
          value={searchQuery}
          onChange={handleChange}
        />
        <Button text={'Submit'}/>
      </form>
    </Card>
  )
}

export default SearchRecipesHeader
