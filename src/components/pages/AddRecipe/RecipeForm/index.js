import React, { Component } from 'react'

//

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      prep_time: '',
      cook_time: ''
    }
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
      <div className="add-rec-form-wrapper">
        <form className="add-rec-form" onSubmit={this.addNewRecipe}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.onInputChange}>
          </input>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.onInputChange}>
          </input>
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
          <button className="ui-btn" type="submit">Add Recipe!</button>
        </form>
      </div>
    )
  }
}
export default RecipeForm;