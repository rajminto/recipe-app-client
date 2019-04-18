import React, { Component } from 'react'
import './App.css'

// Component Import
import Recipe from './components/Recipe'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {},
      isLoaded: false
    }
  }

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

  render() {
    return (
      <div className="App">
        {this.state.isLoaded
          ? <Recipe recipe={this.state.recipe} />
          : <h2>Loading...</h2>
        }
      </div>
    )
  }
}

export default App
