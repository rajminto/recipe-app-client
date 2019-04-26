import React, { Component } from 'react'
import Button from '../../../shared/Button';
import { TweenLite } from 'gsap';
import { Context } from '../../../../context';
//

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      name: '',
      description: '',
      prep_time: '',
      cook_time: '',
    }
    this.container = null;
    this.innerContainer = null;
    this.rcd = null;
  }
  componentDidMount(){
    TweenLite.from(this.innerContainer, .5, { autoAlpha: 0 });
  }
  //
  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  //
  clearForm = () => {
    this.setState({
      name: '',
      description: '',
      prep_time: '',
      cook_time: ''
    })
  }
  //
  sendToLocalStorage = (e) => {
    e.preventDefault();
    localStorage.setItem('recipe_details', JSON.stringify(this.state));
    this.context.sendToContextState('recipe_details', this.state);
    this.clearForm();
  }
  //
  render() {
    const { name, description, prep_time, cook_time } = this.state;
    return (
        <div className="add-rec-form-wrapper"  ref={innerContainer => this.innerContainer = innerContainer}>
          <div className="inner-form-section">
            <h1>Describe Your Recipe:</h1>
            <form className="add-rec-form" onSubmit={this.sendToLocalStorage}>
              <label>Recipe Title:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.onInputChange}>
              </input>
              <label>Description of your recipe:</label>
              <textarea
                type="textarea"
                rows="5"
                name="description"
                value={description}
                onChange={this.onInputChange}>
              </textarea>
              <label>Prep Time:</label>
              <input
                type="text"
                name="prep_time"
                value={prep_time}
                onChange={this.onInputChange}>
              </input>
              <label>Cook Time:</label>
              <input
                type="text"
                name="cook_time"
                value={cook_time}
                onChange={this.onInputChange}>
              </input>
              <Button
                text="Next"
                clickFunc={() => {
                  this.props.enterRecipeDisplay(this.innerContainer)
                }}
              />
            </form>
          </div>
        </div>
    )
  }
}
RecipeForm.contextType = Context;
export default RecipeForm;    