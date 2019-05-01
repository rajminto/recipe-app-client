import React, { Component } from 'react';
import styles from './header.module.scss';
import { ReactComponent as MenuIcon } from '../../../assets/svgs/menu.svg';
import { Consumer, Context } from '../../../context';
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
    const { container, iconBox, closed } = styles;
    return (
      <Consumer>
        {(context) => (
          <div className={container}>
            <div className={context.state.isMenuOpen ? iconBox : `${iconBox} ${closed}`} 
              onClick={context.toggleMenu}>
              <MenuIcon />
            </div>
          </div>
        )}
      </Consumer>
    )
  }
}
Header.contextType = Context;
export default Header;