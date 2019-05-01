import React from 'react'
import styles from './navigator.module.scss';
import { NavLink } from 'react-router-dom';
import { Consumer } from '../../../context';
//

const Navigator =  () => {
  return (
    <Consumer>
      {(context) => (
        <div className={!context.state.isMenuOpen ? `${styles.container} ${styles.menuClosed}` : styles.container}>
          <div className={styles.menuWrap}>
            <NavLink to="/" className="nav-link" onClick={context.toggleMenu}>home</NavLink>
            <NavLink to="/add" className="nav-link" onClick={context.toggleMenu}>add recipe</NavLink>
            <NavLink to="/search" className="nav-link" onClick={context.toggleMenu}>search recipes</NavLink>
            <NavLink to="profile" className="nav-link" onClick={context.toggleMenu}>your profile</NavLink>
          </div>
        </div>
      )}
    </Consumer>
  )
}
export default Navigator;