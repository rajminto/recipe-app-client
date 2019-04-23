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
    fetch('/recipeData.json')
      .then(res => res.json())
      .then(recipe => {
        this.setState({
          recipe: recipe,
          isLoaded: true
        })
      })
  }
  //
  render() {
    return (
      <div>
        {this.state.isLoaded
          ? <Recipe recipe={this.state.recipe} />
          : <h2>Loading...</h2>
        }
      </div>
    )
  }
}
export default Home;
