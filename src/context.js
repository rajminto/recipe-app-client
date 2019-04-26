import React, { Component } from 'react';

export const Context = React.createContext();

export class Provider extends Component{
  state = {
    developers: ['matt', 'ross'],
    recipeCrafterInfo: {}
  }

  sendToContextState = (key, value) => {
    this.setState({ [key]: value })
  }

  render(){
    return(
      <Context.Provider value={{
        state: this.state,
        sendToContextState: this.sendToContextState
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer