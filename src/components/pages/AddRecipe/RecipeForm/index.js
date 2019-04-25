import React, { Component } from 'react'
import Button from '../../../shared/Button';
import RecipeCreateDetails from '../RecipeCreateDetails';
import { TweenLite, Back, Power4 } from 'gsap';
import { CSSTransition } from 'react-transition-group';
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
  // enterRecipeDisplay = () => {
  //   // TweenLite.to(this.container, .8, { className: '+=expanded-display', ease: Power4.easeIn });
  //   // TweenLite.to(this.innerContainer, .5, ({ autoAlpha: 0, onComplete: () => {
  //   //   TweenLite.to(this.innerContainer, 0.1, { className: '+=displayNone' })
  //   // }}));
  //   // TweenLite.delayedCall(1, () => {
  //   //   this.setState({ expandedDisplay: !this.state.expandedDisplay })
  //   // })
  //   // this.setState({ expandedDisplay: !this.state.expandedDisplay })
  // }
  //
  // reverseAnimate = () => {
  //   TweenLite.to(this.rcd, .3, { autoAlpha: 0, onComplete: () => {
  //     TweenLite.to(this.container, .8, { className: '-=expanded-display', width: "40em", height: 'auto', ease: Power4.easeIn });
  //     TweenLite.to(this.innerContainer, 0.1, { className: '-=displayNone', autoAlpha: 1 })
  //   }});
  // }
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
    localStorage.setItem('recipe_details', JSON.stringify(this.state));
  }
  //
  render() {
    const { name, description, prep_time, cook_time } = this.state;
    return (
        <div className="add-rec-form-wrapper"  ref={innerContainer => this.innerContainer = innerContainer}>
          <div className="inner-form-section">
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
export default RecipeForm;    