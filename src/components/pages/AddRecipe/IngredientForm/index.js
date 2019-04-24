import React, { Component } from 'react'
import Button from '../../../shared/Button';
import { TweenLite } from 'gsap';
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
      this.setState({ ingredients }, () => console.log(this.state.ingredients))
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() })
    }
  }
  addNewIngredient = (e) => {
    this.setState((prevState) => ({
      ingredients: [...prevState.ingredients, { name: '', description: '' }],
    }));
  }
  //
  removeClick(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
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
                  <label htmlFor={ingredientId}><span>{`#${i + 1}`}</span>Name/Varietal:</label>
                  <input
                    type="text"
                    name={ingredientId}
                    data-id={i}
                    id={ingredientId}
                    className="name"
                  />
                  <label htmlFor={descId}>Quantity:</label>
                  <input
                    type="text"
                    name={descId}
                    data-id={i}
                    id={descId}
                    className="description"
                  />
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
export default IngredientForm;