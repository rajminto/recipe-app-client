import React, { Component } from 'react'
import Recipe from '../../Recipe';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipe: {},
      isLoaded: false
    }
  }
  //
  componentDidMount() {
    fetch('https://recipe-app-server.herokuapp.com/api/recipes/1')
      .then(res => res.json())
      .then(recipe => {
        this.setState({
          recipe: recipe.recipe,
          isLoaded: true
        })
      })
  }
  //
  render() {
    return (
      <div className="home-container">
        {this.state.isLoaded
          ? <Recipe recipe={this.state.recipe} />
          : <h2>Loading...</h2>
        }
      </div>
    )
  }
}
export default Home;

