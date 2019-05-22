import React, { Component, Fragment } from 'react'
import Button from '../../../shared/Button';
import { TweenLite } from 'gsap';
import { ReactComponent as DeleteIcon } from '../../../../assets/svgs/delete.svg';
import { Context } from '../../../../context';

//

class ProcedureForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      procedures: [{ description: '' }]
    }
    this.container = null;
  }
  //
  componentDidMount(){
    TweenLite.from(this.container, 1, ({ autoAlpha: 0 }));
  }
  //
  handleChange = (e) => {
    if (['description'].includes(e.target.className)) {
      let procedures = [...this.state.procedures]
      procedures[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase();
      procedures[e.target.dataset.id]['order'] = parseInt(e.target.dataset.id) + 1;
      this.setState({ procedures: procedures })
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() })
    }
  }
  addNewProcedure = (e) => { 
    this.setState((prevState) => ({
      procedures: [...prevState.procedures, { description: '' }]
    }));
    this.props.sendProcedures(this.state.procedures);
    localStorage.setItem('recipe_procedures', JSON.stringify(this.state.procedures));
    this.context.sendToContextState('recipe_procedures', this.state.procedures);
  }
  //
  removeProcedure(i) {
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
        <h2>Please add your procedures:</h2>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange} className="add-ing-form">
          {
            procedures.map((ingredient, i) => {
              let descId = `desc-${i}`
              return (
                <Fragment>
                  <label htmlFor={descId}>Step Description:</label>
                  <div className="ingredient-field" key={i}>
                    <textarea
                      type="textarea"
                      rows="3"
                      cols="20"
                      name={descId}
                      data-id={i}
                      id={descId}
                      className="description"
                    >
                    </textarea>
                    <div className="delete-btn" onClick={() => this.removeProcedure(i)}>
                      <DeleteIcon />
                    </div>
                  </div>
                </Fragment>
              )
            })
          }
          <div className="button-container">
            <Button
              text="Add Procedure"
              clickFunc={this.addNewProcedure}
            />
          </div>
        </form>
      </div>
    )
  }
}
ProcedureForm.contextType = Context;
export default ProcedureForm;