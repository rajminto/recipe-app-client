import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import { baseUrl } from '../../../api';

// Component imports
import Recipe from '../../Recipe/Recipe.connector';
import Loader from '../../shared/Loader';

class RecipeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      isLoaded: false,
      error: false,
      message: '',
      showAlert: true
    };
  }

  componentDidMount() {
    // Capture id from url params
    const { id } = this.props.match.params;
    // Validate id: ensure it is a number
    // eslint-disable-next-line radix
    if (!parseInt(id))
      this.setState({
        error: true,
        message: 'Recipe not found. Please enter a valid ID.'
      });
    else {
      this.fetchRecipeById(id);
    }
  }

  onClose = () => {
    this.setState({ showAlert: !this.state.showAlert });
  };

  fetchRecipeById(id = 1) {
    fetch(`${baseUrl}/api/recipes/${id}`)
      .then(res => res.json())
      .then(response => {
        response.success
          ? this.setState({ isLoaded: true, recipe: response.recipe })
          : this.setState({
              isLoaded: true,
              error: true,
              message: response.message
            });
      })
      // eslint-disable-next-line no-console
      .catch(console.log);
  }

  render() {
    const { error, isLoaded, message } = this.state;

    // TODO: Replace with component with options to search again, go back to profile, etc.
    if (error) return <h1>{message}</h1>;

    return (
      <div className='home-container'>
        {isLoaded ? <Recipe recipeInfo={this.state.recipe} /> : <Loader />}
      </div>
    );
  }
}

RecipeDetail.propTypes = {
  match: shape({
    params: shape({
      id: string.isRequired
    }).isRequired
  }).isRequired
};

export default RecipeDetail;
