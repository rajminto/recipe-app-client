import React, { Component } from 'react'
import { baseUrl } from '../../api'
import styles from './search-recipes.module.scss'

// Component Imports
import '../../shared/RecipesList'
import SearchRecipesHeader from './SearchRecipesHeader';
import RecipesListScroll from '../../shared/RecipesListScroll';
import Loader from '../../shared/Loader';

export class SearchRecipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      offset: 0,
      limit: 12,
      recipes: []
    }
  }

  componentDidMount() {
    this.fetchMoreRecipes()
  }

  fetchMoreRecipes = () => {
    const { offset, limit, recipes } = this.state
    this.setState({ offset: offset + limit })
    fetch(`${baseUrl}/api/recipes?offset=${offset}&limit=${limit}`)
      .then(res => res.json())
      .then(response => {
        this.setState({ isLoaded: true, recipes: recipes.concat(response.recipes) })
      })
  }

  render() {
    const { isLoaded, recipes } = this.state

    if (!isLoaded) return <Loader />

    return (
      <div className={styles.recipesListContainer}>
        <SearchRecipesHeader />
        <RecipesListScroll title='Results' recipes={recipes} fetchMoreRecipes={this.fetchMoreRecipes}/>
      </div>
    )
  }
}

export default SearchRecipes
