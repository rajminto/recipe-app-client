import React, { Component } from 'react';
import styles from './header.module.scss';
import { ReactComponent as MenuIcon } from '../../../assets/svgs/menu.svg';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    }
  }
  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }
  render(){
    const { container, iconBox, closed } = styles;
    return (
      <div className={container}>
        <div className={this.state.menuOpen ? iconBox : `${iconBox} ${closed}`} onClick={this.toggleMenu}>
          <MenuIcon />
        </div>
      </div>
    )
  }
}
export default Header;