import React, { Component } from 'react';
import { baseUrl } from '../../../api';

// Component imports
import Recipe from '../../Recipe';
import Alert from '../../shared/Alert';
import Loader from '../../shared/Loader';

class RecipeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      isLoaded: false,
      error: false,
      message: '',
      showAlert: false
    };
  }

  componentDidMount() {
    // Capture id from url params
    const { id } = this.props.match.params;
    // Validate id: ensure it is a number
    if (!parseInt(id))
      this.setState({
        error: true,
        message: 'Recipe not found. Please enter a valid ID.'
      });
    else {
      this.fetchRecipeById(id);
    }
  }

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
      .catch(console.log);
  }

  onClose = () => {
    this.setState({ showAlert: !this.state.showAlert });
  };

  render() {
    const { error, isLoaded, message } = this.state;

    // TODO: Replace with component with options to search again, go back to profile, etc.
    if (error) return <h1>{message}</h1>;

    return (
      <div className="home-container">
        <Alert
          showAlert={this.state.showAlert}
          subText="Please Create A Recipe"
          onClose={this.onClose}
        />
        {isLoaded ? <Recipe recipe={this.state.recipe} /> : <Loader />}
      </div>
    );
  }
}
export default RecipeDetail;
