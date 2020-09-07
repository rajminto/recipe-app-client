import React, { useContext, useState } from 'react';
import styles from './header.module.scss';
import { Context } from '../../../context';
import MenuIcon from '../MenuIcon';
import { ReactComponent as CarrotSVG } from '../../../assets/svgs/food.svg';

const Header = () => {
  const [menuOpen] = useState(false);
  const context = useContext(Context);

  const { carrotSvgWrap, container, iconBox, closed, companyName, mainLogo } = styles;

  return (
    <div className={container}>
      <div
        className={context.state.isMenuOpen ? iconBox : `${iconBox} ${closed}`}
        onClick={context.toggleMenu}
      >
        <MenuIcon menuOpen={menuOpen} />
      </div>
      <div className={mainLogo}>
        <h1 className={companyName}>SAVVORED</h1>
        <div className={carrotSvgWrap}>
          <CarrotSVG />
        </div>
      </div>
    </div>
  );
};

export default Header;
