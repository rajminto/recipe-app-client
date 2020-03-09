import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './loginFailureCard.module.scss';

import Card from '../Card';
import Button from '../Button';

const LoginFailureCard = () => (
  <Card className={styles.loginFailureContainer}>
    <h1>Login Failed</h1>
    <p>Please login or register a new account.</p>
    <div className={styles.buttonContainer}>
      <NavLink to="/login">
        <Button text="Login" />
      </NavLink>
      <NavLink to="/register">
        <Button text="Register" />
      </NavLink>
    </div>
  </Card>
);

export default LoginFailureCard;
