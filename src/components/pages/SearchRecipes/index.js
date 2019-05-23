import React, { Component } from 'react'
import { baseUrl } from '../../api'
import styles from './search-recipes.module.scss'

export class SearchRecipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    fetch(`${baseUrl}/api/recipes`)
      .then(res => res.json())
      .then(response => {
        console.log(response)
      })
  }

  render() {
    return (
      <div>
        <h1>Search Recipes</h1>
      </div>
    )
  }
}

export default SearchRecipes
