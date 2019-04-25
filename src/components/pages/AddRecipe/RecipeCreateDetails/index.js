import React, { Component, Fragment } from 'react'
import IngredientForm from '../IngredientForm';
import ProcedureForm from '../ProcedureForm';
import { ReactComponent as ReturnIcon } from '../../../../assets/svgs/return.svg'
//

class RecipeCreateDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      prevFormData: []
    }
    this.container = null;
  }
  componentDidMount(){
    this.hydrateFromLocalStorage();
    // TweenLite.from(this.container, .8, ({ autoAlpha: 0 }));
  }
  hydrateFromLocalStorage = () => {
    let prevFormData = JSON.parse(localStorage.getItem('recipe_details'));
    this.setState({ prevFormData: prevFormData });
  }
  getIngredientsFromInputs = (items) => {
    this.setState({ ingredientItemsForList: items })
  }
  getProceduresFromInputs = (items) => {
    this.setState({ procedureItemsForList: items })
  }
  createDetailHeaders = () => {
    const { prevFormData } = this.state;
    return(
      <Fragment>
        <p>Recipe Name: <span>{prevFormData.name}</span></p>
        <p>Description: <span>{prevFormData.description}</span></p>
        <p>Preparation Duration: <span>{prevFormData.prep_time}</span></p>
        <p>Cooking Duration: <span>{prevFormData.cook_time}</span></p>
      </Fragment>
    )
  }
  render() {
    return (
      <div className="recipe-create-details" ref={container => this.container = container}>
        <div className="return-icon" onClick={() => this.props.exitRecipeDisplay(this.container)}>
          <ReturnIcon />
        </div>
        <div className="recipe-info-top">
          <div className="recipe-info">
            <h1>Ingredients and Procedures:</h1>
            {this.createDetailHeaders()}
          </div>
          <div className="current-list">
            <div className="current-ingredients">
              <h1>Ingredients:</h1>
              <ol>
                {this.state.ingredientItemsForList ? this.state.ingredientItemsForList.map((ing, i) => {
                  return(
                    <li key={i}>{`${ing.description} -- ${ing.name}`}</li>
                  )
                }) : null}
              </ol>
            </div>
            <div className="current-procedures">
              <h1>Directions:</h1>
              <ol>
                {this.state.procedureItemsForList ? this.state.procedureItemsForList.map((dir, i) => {
                  return(
                    <li key={i}>{`${dir.description} -- ${dir.name}`}</li>
                  )
                }) : null}
              </ol>
            </div>
          </div>
        </div>
        <div className="recipe-info-bot">
          <IngredientForm 
            sendIngredients={this.getIngredientsFromInputs}
          />
          <ProcedureForm 
            sendProcedures={this.getProceduresFromInputs}
          />
        </div>
      </div>
    )
  }
}
export default RecipeCreateDetails;
