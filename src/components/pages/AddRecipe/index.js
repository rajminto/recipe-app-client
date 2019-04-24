import React, { Component, Fragment } from 'react'
import RecipeForm from './RecipeForm';
import DynamicForm from './IngredientForm';
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
        {/* <DynamicForm /> */}
      </Fragment>
    )
  }
}
export default AddRecipe;