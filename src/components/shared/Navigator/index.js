import React from 'react'
import styles from './navigator.module.scss';
import { NavLink } from 'react-router-dom';

const Navigator =  () => {
  return (
    <div className={styles.container}>
      <div className={styles.menuWrap}>
        <NavLink to="/" className="nav-link">home</NavLink>
        <NavLink to="/add" className="nav-link">add recipe</NavLink>
        <NavLink to="/search" className="nav-link">search recipes</NavLink>
        <NavLink to="/profile" className="nav-link">your profile</NavLink>
        <NavLink to="/register" className="nav-link">register</NavLink>
        <NavLink to="/login" className="nav-link">login</NavLink>
      </div>      
    </div>
  )
}
export default Navigator;