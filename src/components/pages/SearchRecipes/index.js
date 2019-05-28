import React, { Component } from 'react'
import { baseUrl } from '../../../api'
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
      limit: 20,
      recipes: [],
      searchQuery: '',
      searchType: 'ingredient'
    }
  }

  componentDidMount() {
    this.setState({ isLoaded: true })
  }

  fetchMoreRecipes = () => {
    const { offset, limit, recipes, searchType, searchQuery } = this.state
    this.setState({ offset: offset + limit })
    fetch(`${baseUrl}/api/recipes?offset=${offset}&limit=${limit}&type=${searchType}&query=${searchQuery}`)
      .then(res => res.json())
      .then(response => {
        response.success
          ? this.setState({ moreRecipes: true, isLoaded: true, recipes: recipes.concat(response.recipes) })
          : this.setState({ moreRecipes: false })
      })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  searchRecipes = () => {
    const { searchType, searchQuery } = this.state
    // Reset offset and limit on state to reset infinite scroll
    this.setState({ offset: 0, limit: 20 })
    fetch(`${baseUrl}/api/recipes?type=${searchType}&query=${searchQuery}`)
      .then(res => res.json())
      .then(response => {
        // TODO: refactor to set moreRecipes: t/f based on length of recipes being > or < than offset/limit (could save an API call)
        response.success
          ? this.setState({ moreRecipes: true, isLoaded: true, recipes: response.recipes, offset: this.state.offset + this.state.limit })
          : this.setState({ moreRecipes: false, recipes: [] })
          // Reset recipes to empty array to display 'No recipes found' in RecipesListScroll
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.searchRecipes()
  }

  render() {
    const { isLoaded, recipes, moreRecipes, searchQuery } = this.state

    if (!isLoaded) return <Loader />

    return (
      <div className={styles.recipesListContainer}>
        <SearchRecipesHeader
          searchQuery={searchQuery}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipesListScroll
          title='Results'
          recipes={recipes}
          moreRecipes={moreRecipes}
          fetchMoreRecipes={this.fetchMoreRecipes}/>
      </div>
    )
  }
}

export default SearchRecipes
