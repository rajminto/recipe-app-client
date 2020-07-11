import React, { Component } from 'react';
import { baseUrl } from '../../../api';
import styles from './search-recipes.module.scss';

// Component Imports
import '../../shared/RecipesList';
import SearchRecipesHeader from './SearchRecipesHeader';
import RecipesListScroll from '../../shared/RecipesListScroll';
import Loader from '../../shared/Loader';

class SearchRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      moreRecipes: true,
      offset: 0,
      limit: 20,
      recipes: [],
      searchQuery: '',
      searchType: 'ingredient'
    };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }

  fetchMoreRecipes = () => {
    const { offset, limit, recipes, searchType, searchQuery } = this.state;
    // Set new offset on state for subsequent queries
    this.setState({
      offset: offset + limit
    });
    fetch(
      `${baseUrl}/api/recipes?offset=${offset}&limit=${limit}&type=${searchType}&query=${searchQuery}`
    )
      .then(res => res.json())
      .then(response => this.handleFetchMoreRecipesResponse(response, recipes, offset, limit))
      // eslint-disable-next-line no-console
      .catch(console.error);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  searchRecipes = () => {
    const { searchType, searchQuery } = this.state;
    // Ensure offset and limit on state are reset
    this.setState({
      offset: 0,
      limit: 20
    });
    fetch(`${baseUrl}/api/recipes?type=${searchType}&query=${searchQuery}`)
      .then(res => res.json())
      .then(this.handleSearchResponse)
      // eslint-disable-next-line no-console
      .catch(console.error);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.searchRecipes();
  };

  handleSearchResponse = response => {
    const { offset, limit } = this.state;

    if (response.success && response.recipes.length === limit) {
      // Recipes found and more are available
      this.setState({
        moreRecipes: true,
        isLoaded: true,
        recipes: response.recipes,
        offset: offset + limit
      });
    } else if (response.success && response.recipes.length < limit) {
      // Recipes found but no more are available
      this.setState({
        moreRecipes: false,
        isLoaded: true,
        recipes: response.recipes,
        offset: offset + limit
      });
    } else {
      // No recipes found: reset recipes to empty array to display 'No recipes found' in RecipesListScroll
      this.setState({
        moreRecipes: false,
        recipes: []
      });
    }
  };

  handleFetchMoreRecipesResponse = (response, recipes, offset, limit) => {
    if (response.success && response.recipes.length === limit) {
      // Recipes found and more are available
      this.setState({
        moreRecipes: true,
        isLoaded: true,
        recipes: recipes.concat(response.recipes),
        offset: offset + limit
      });
    } else if (response.success && response.recipes.length < limit) {
      // Recipes found but no more are available
      this.setState({
        moreRecipes: false,
        isLoaded: true,
        recipes: recipes.concat(response.recipes),
        offset: this.state.offset + this.state.limit
      });
    } else {
      // No recipes found: reset offset and limit
      this.setState({
        moreRecipes: false,
        offset: 0,
        limit: 20
      });
    }
  };

  render() {
    const { isLoaded, recipes, moreRecipes, searchQuery } = this.state;

    if (!isLoaded) return <Loader />;

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
          fetchMoreRecipes={this.fetchMoreRecipes}
        />
      </div>
    );
  }
}

export default SearchRecipes;
