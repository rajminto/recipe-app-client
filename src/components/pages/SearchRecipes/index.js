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
      moreRecipes: true,
      offset: 0,
      limit: 12,
      recipes: []
    }
  }

  componentDidMount() {
    this.fetchRecipes()
  }

  fetchRecipes = () => {
    const { offset, limit, recipes } = this.state
    console.log('fetching')
    this.setState({ offset: offset + limit })
    fetch(`${baseUrl}/api/recipes?offset=${offset}&limit=${limit}`)
      .then(res => res.json())
      .then(response => {
        response.success
          ? this.setState({ isLoaded: true, recipes: recipes.concat(response.recipes) })
          : this.setState({ moreRecipes: false })
      })
  }

  render() {
    const { isLoaded, recipes, moreRecipes } = this.state

    if (!isLoaded) return <Loader />

    return (
      <div className={styles.recipesListContainer}>
        <SearchRecipesHeader />
        <RecipesListScroll
          title='Results'
          recipes={recipes}
          moreRecipes={moreRecipes}
          fetchRecipes={this.fetchRecipes}/>
      </div>
    )
  }
}

export default SearchRecipes
