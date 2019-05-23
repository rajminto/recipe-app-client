import React, { Component } from 'react'
import styles from './search-recipes.module.scss'
import { baseUrl } from '../../api'

export class SearchRecipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default SearchRecipes
