import React, { Component, Fragment } from 'react'
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
      <Fragment>
        <RecipeForm />
      </Fragment>
    )
  }
}
export default AddRecipe;