import React, { Component } from 'react';

export const Context = React.createContext();

export class Provider extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    isMenuOpen: false,
    // eslint-disable-next-line react/no-unused-state
    funcLoaded: null
  };

  sendToContextState = (key, value) => {
    this.setState({ [key]: value });
  };

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  funcGun = ammoFunc => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ funcLoaded: ammoFunc });
  };

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          sendToContextState: this.sendToContextState,
          toggleMenu: this.toggleMenu,
          funcGun: this.funcGun
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const { Consumer } = Context;
