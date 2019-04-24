import React, { Component, Fragment } from 'react'
import IngredientForm from '../../IngredientForm';
import { TweenLite } from 'gsap';

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
    TweenLite.from(this.container, .8, ({ autoAlpha: 0 }));
  }
  hydrateFromLocalStorage = () => {
    let prevFormData = JSON.parse(localStorage.getItem('recipe_details'));
    this.setState({ prevFormData: prevFormData });
  }
  createDetailHeaders = () => {
    const { prevFormData } = this.state;
    return(
      <Fragment>
        <p>Recipe Name: {prevFormData.name}</p>
        <p>Description: {prevFormData.description}</p>
        <p>Preparation Duration: {prevFormData.prep_time}</p>
        <p>Cooking Duration: {prevFormData.cook_time}</p>
      </Fragment>
    )
  }
  render() {
    return (
      <div className="recipe-create-details" ref={container => this.container = container}>
        <div className="recipe-info-top">
          <div className="recipe-info">
            <h1>Ingredients and Procedures:</h1>
            {this.createDetailHeaders()}
          </div>
          <div className="current-list">
            <h1>I AM CURRENTLY DISPLAYING YOUR LIST!!!</h1>
          </div>
        </div>
        <div className="recipe-info-bot">
          <IngredientForm />
        </div>
      </div>
    )
  }
}
export default RecipeCreateDetails;
