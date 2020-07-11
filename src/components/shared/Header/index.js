import React, { Component } from 'react';
import styles from './header.module.scss';
import { Consumer, Context } from '../../../context';
import MenuIcon from '../MenuIcon';
import { ReactComponent as CarrotSVG } from '../../../assets/svgs/food.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    const { carrotSvgWrap, container, iconBox, closed, companyName, mainLogo } = styles;

    return (
      <Consumer>
        {context => (
          <div className={container}>
            <div
              className={context.state.isMenuOpen ? iconBox : `${iconBox} ${closed}`}
              onClick={context.toggleMenu}
            >
              <MenuIcon menuOpen={this.state.menuOpen} />
            </div>
            <div className={mainLogo}>
              <h1 className={companyName}>SAVVORED</h1>
              <div className={carrotSvgWrap}>
                <CarrotSVG />
              </div>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}
Header.contextType = Context;
export default Header;
