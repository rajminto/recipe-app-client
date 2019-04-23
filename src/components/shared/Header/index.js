import React from 'react';
import styles from './header.module.scss';

const Header = () => {
  const { container } = styles;
  return(
    <div className={container}>HEADER COMPONENT</div>
  )
}
export default Header;