import React, { Component } from 'react'
import { baseUrl } from '../../api'
import styles from './search-recipes.module.scss'

// Component Imports
import '../../shared/RecipesList'
import SearchRecipesHeader from './SearchRecipesHeader';
import RecipesList from '../../shared/RecipesList';

export class SearchRecipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    fetch(`${baseUrl}/api/recipes`)
      .then(res => res.json())
      .then(({ recipes }) => {
        this.setState({ recipes })
      })
  }

  render() {
    const { recipes } = this.state

    return (
      <div className={styles.recipesListContainer}>
        <SearchRecipesHeader />
        <RecipesList title='Results' recipes={recipes} />
      </div>
    )
  }
}

export default SearchRecipes
