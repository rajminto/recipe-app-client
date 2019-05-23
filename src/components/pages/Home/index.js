import React, { Component } from 'react'
import { baseUrl } from '../../../api'

// Component imports
import Recipe from '../../Recipe';
import Alert from '../../shared/Alert';
import Loader from '../../shared/Loader';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipe: {},
      isLoaded: false,
      error: false,
      message: '',
      showAlert: false
    }
  }
  //
  componentDidMount() {
    // Capture id, set default at 1 if not found
    const { id } = this.props.match.params || 1
    this.fetchRecipeById(id)

    // setTimeout(() => {
    //   this.setState({ showAlert: !this.state.showAlert })
    // }, 2000)
  }

  fetchRecipeById(id) {
    fetch(`${baseUrl}/api/recipes/${id}`)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        response.success
          ? this.setState({ isLoaded: true, recipe: response.recipe })
          : this.setState({ isLoaded: true, error: true, message: response.message })
        
      })
      .catch(console.log)
  }

  onClose = () => {
    this.setState({ showAlert: !this.state.showAlert })
  }
  //
  render() {
    const { error } = this.state

    if (error) return <h1>No recipe found. Please try again.</h1>

    return (
      <div className="home-container">
        <Alert 
          showAlert={this.state.showAlert}
          subText="Please Create A Recipe"
          onClose={this.onClose}
        />
        {this.state.isLoaded
          ? <Recipe recipe={this.state.recipe} />
          : <Loader />
        }
      </div>
    )
  }
}
export default Home;

