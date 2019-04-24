import React, { Component, Fragment } from 'react'
import MasterForm from './MasterForm';
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
        <MasterForm />
      </Fragment>
    )
  }
}
export default AddRecipe;