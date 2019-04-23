import React, { Component } from 'react'
import RecipeForm from './RecipeForm';
//

class AddRecipe extends Component {
  constructor(props){
    super(props);
    this.state = { }
  }
  //
  render() {
    return (
      <div>
        <RecipeForm />
      </div>
    )
  }
}
export default AddRecipe;