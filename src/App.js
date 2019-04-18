import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Component Import
import Recipe from './components/Recipe'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {}
    }
  }

  componentDidMount() {
    fetch('/recipeData.json')
      .then(res => res.json())
      .then(recipe => {
        this.setState({ recipe })
      })
  }

  render() {
    return (
      <div className="App">
        <Recipe recipe={this.state.recipe} />
      </div>
    );
  }
}

export default App;
