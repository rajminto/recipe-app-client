import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigator.module.scss';
import { Consumer } from '../../../context';

const Navigator = () => {
  return (
    <Consumer>
      {context => (
        <div
          className={
            !context.state.isMenuOpen
              ? `${styles.container} ${styles.menuClosed}`
              : styles.container
          }
        >
          <div className={styles.menuWrap}>
            <NavLink
              to='/'
              className='nav-link'
              onClick={() => {
                context.toggleMenu();
                context.state.funcLoaded();
              }}
            >
              home
            </NavLink>
            <NavLink
              to='/add'
              className='nav-link'
              onClick={() => {
                context.toggleMenu();
                context.state.funcLoaded();
              }}
            >
              add recipe
            </NavLink>
            <NavLink
              to='/search'
              className='nav-link'
              onClick={() => {
                context.toggleMenu();
                context.state.funcLoaded();
              }}
            >
              search recipes
            </NavLink>
            <NavLink
              to='/profile'
              className='nav-link'
              onClick={() => {
                context.toggleMenu();
                context.state.funcLoaded();
              }}
            >
              your profile
            </NavLink>
            <NavLink
              to='/register'
              className='nav-link'
              onClick={() => {
                context.toggleMenu();
                context.state.funcLoaded();
              }}
            >
              register
            </NavLink>
            <NavLink
              to='/login'
              className='nav-link'
              onClick={() => {
                context.toggleMenu();
                context.state.funcLoaded();
              }}
            >
              login
            </NavLink>
          </div>
        </div>
      )}
    </Consumer>
  );
};
export default Navigator;
