import React, { Component } from 'react'
import Button from '../../../shared/Button';
import { TweenLite, TimelineLite, Back, Power3, Power4 } from 'gsap';
//

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      name: '',
      description: '',
      prep_time: '',
      cook_time: ''
    }
    this.container = null;
  }
  //
  componentDidMount() {
    TweenLite.from(this.container, 0.7, { autoAlpha: 0, y: 100, ease: Back.easeInOut });
  }
  //
  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  //
  animateOff = () => {
    TweenLite.to(this.container, 0.3, { x: -700, autoAlpha: 0, ease: Power3.easeOut });
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
  addNewRecipe = (e) => {
    e.preventDefault();
    fetch('https://recipe-app-server.herokuapp.com/api/recipes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then((res) => console.log('RESPONSE:::', res))
    this.clearForm();
  }
  //
  render() {
    const { name, description, prep_time, cook_time } = this.state;
    return (
      <div className="add-rec-form-wrapper" ref={container => this.container = container}>
        <h1>Describe Your Recipe:</h1>
        <form className="add-rec-form" onSubmit={this.addNewRecipe}>
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
            text="Continue"
            clickFunc={this.animateOff}
          />
        </form>
      </div>
    )
  }
}
export default RecipeForm;