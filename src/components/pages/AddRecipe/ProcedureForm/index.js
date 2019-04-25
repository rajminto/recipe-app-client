import React, { Component } from 'react'
import Button from '../../../shared/Button';
import { TweenLite } from 'gsap';
import { ReactComponent as DeleteIcon } from '../../../../assets/svgs/delete.svg';

//

class ProcedureForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      procedures: [{ name: '', description: '' }]
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
      let procedures = [...this.state.procedures]
      procedures[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
      this.setState({ procedures })
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() })
    }
  }
  addNewProcedure = (e) => {
    this.setState((prevState) => ({
      procedures: [...prevState.procedures, { name: '', description: '' }],
    }));
    this.props.sendProcedures(this.state.procedures)
  }
  //
  removeClick(i) {
    let procedures = [...this.state.procedures];
    procedures.splice(i, 1);
    this.setState({ procedures });
  }
  //
  handleSubmit = (e) => {
    e.preventDefault()
  }
  //
  render() {
    const { procedures } = this.state;
    return (
      <div className="add-ing-form-wrapper" ref={container => this.container = container}>
        <h1>Please add your procedures:</h1>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange} className="add-ing-form">
          {
            procedures.map((ingredient, i) => {
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
                  <div className="delete-btn" onClick={() => this.removeClick(i)}>
                    <DeleteIcon />
                  </div>
                </div>
              )
            })
          }
          <div className="button-container">
            <Button
              text="Add Procedure"
              clickFunc={this.addNewProcedure}
            />
            <Button
              text="Submit"
              clickFunc={() => console.log('procedure submitted')}
            />
          </div>
        </form>
      </div>
    )
  }
}
export default ProcedureForm;