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
            <NavLink to="/" className="nav-link">home</NavLink>
            <NavLink to="/add" className="nav-link">add recipe</NavLink>
            <NavLink to="/search" className="nav-link">search recipes</NavLink>
            <NavLink to="profile" className="nav-link">your profile</NavLink>
          </div>
        </div>
      )}
    </Consumer>
  )
}
export default Navigator;