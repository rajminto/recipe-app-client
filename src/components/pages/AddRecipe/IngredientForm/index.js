import React, { Component } from 'react'
import Button from '../../../shared/Button';
import { Context } from '../../../../context';
import { TweenLite } from 'gsap';
import { ReactComponent as DeleteIcon } from '../../../../assets/svgs/delete.svg';
//

class IngredientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [{ name: '', description: '' }]
    }
    this.container = null;
  }
  //
  componentDidMount(){
    TweenLite.from(this.container, 1, ({ autoAlpha: 0 }));
  }
  //
  handleChange = (e) => {
    if (['name', 'description'].includes(e.target.className)) {
      let ingredients = [...this.state.ingredients]
      ingredients[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
      this.setState({ ingredients }, () => console.log(this.state))
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() })
    }
  }
  addNewIngredient = (e) => {
    this.setState((prevState) => ({
      ingredients: [...prevState.ingredients, { name: '', description: '' }],
    }));
    this.props.sendIngredients(this.state.ingredients)
    localStorage.setItem('recipe_ingredients', JSON.stringify(this.state.ingredients));
    this.context.sendToContextState('recipe_ingredients', this.state.ingredients);
  }
  //
  removeClick(i) {
    let ingredients = [...this.state.ingredients];  
    if(i === 0){
      return
    } else {

      ingredients.splice(i, 1);
      this.setState({ ingredients }, () => this.props.sendIngredients(this.state.ingredients));
    }
  }
  //
  handleSubmit = (e) => {
    e.preventDefault()
  }
  //
  render() {
    const { ingredients } = this.state;
    return (
      <div className="add-ing-form-wrapper" ref={container => this.container = container}>
        <h1>Please add your ingredients:</h1>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange} className="add-ing-form">
          {
            ingredients.map((ingredient, i) => {
              let ingredientId = `ing-${i}`, descId = `desc-${i}`
              return (
                <div className="ingredient-field" key={i}>
                  <label htmlFor={descId}>Quantity:</label>
                  <input
                    type="text"
                    name={descId}
                    data-id={i}
                    id={descId}
                    className="description"
                  />
                  <label htmlFor={ingredientId}><span>{`#${i + 1}`}</span>Name/Varietal:</label>
                  <input
                    type="text"
                    name={ingredientId}
                    data-id={i}
                    id={ingredientId}
                    className="name"
                  />
                  <div className="delete-btn" onClick={() => this.removeClick(i)}>
                    <DeleteIcon />
                  </div>
                </div>
              )
            })
          }
          <div className="button-container">
            <Button
              text="Add Ingredient"
              clickFunc={this.addNewIngredient}
            />
            <Button
              text="Submit"
              clickFunc={() => console.log('ingredient submitted')}
            />
          </div>
        </form>
      </div>
    )
  }
}
IngredientForm.contextType = Context;
export default IngredientForm;