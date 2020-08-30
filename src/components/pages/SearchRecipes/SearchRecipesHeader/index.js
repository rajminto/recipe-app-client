import React from 'react';
import { func, string } from 'prop-types';
import styles from './search-recipes-header.module.scss';

import Card from '../../../shared/Card';
import Button from '../../../shared/Button';

const SearchRecipesHeader = ({ searchQuery, handleChange, handleSubmit }) => {
  return (
    <Card className={styles.headerContainer}>
      <h1>Search Recipes</h1>
      <p>Enter a search term below to search for recipes.</p>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <label htmlFor='search-query'>Ingredient:</label>
        <input
          id='search-query'
          type='text'
          name='searchQuery'
          value={searchQuery}
          onChange={handleChange}
        />
        <div>
          <Button text='Submit' />
        </div>
      </form>
    </Card>
  );
};

SearchRecipesHeader.propTypes = {
  searchQuery: string.isRequired,
  handleChange: func.isRequired,
  handleSubmit: func.isRequired
};

export default SearchRecipesHeader;
