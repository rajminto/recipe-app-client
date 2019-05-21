import React, { Component } from 'react';

export const Context = React.createContext();

export class Provider extends Component{
  state = {
    developers: ['matt', 'ross'],
    recipeCrafterInfo: {},
    currentUserId: 1,
    isMenuOpen: false
  }
  //
  sendToContextState = (key, value) => {
    this.setState({ [key]: value })
  }
  //
  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }
  //
  funcGun = (ammoFunc) => {
    this.setState({ funcLoaded: ammoFunc })
  }
  //
  render(){
    return(
      <Context.Provider value={{
        state: this.state,
        sendToContextState: this.sendToContextState,
        toggleMenu: this.toggleMenu,
        funcGun: this.funcGun
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer