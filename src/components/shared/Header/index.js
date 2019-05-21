import React, { Component } from 'react';
import styles from './header.module.scss';
import { Consumer, Context } from '../../../context';
import MenuIcon from '../MenuIcon';
//

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  // 
  render(){
    const { container, iconBox, closed, companyName, mainLogo } = styles;
    return (
      <Consumer>
        {(context) => (
          <div className={container}>
            <div className={context.state.isMenuOpen ? iconBox : `${iconBox} ${closed}`} 
              onClick={context.toggleMenu}>
              <MenuIcon menuOpen={this.state.menuOpen} />
            </div>
            <div className={mainLogo}>
              <h1 className={companyName}>SAVVOR</h1>
            </div>
          </div>
        )}
      </Consumer>
    )
  }
}
Header.contextType = Context;
export default Header;