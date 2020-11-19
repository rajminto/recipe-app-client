import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './login.module.scss';

import Button from '../../shared/Button';
import Card from '../../shared/Card';
import CheckAnimation from '../../shared/CheckAnimation';

import { baseUrl } from '../../../api';

// TODO?: use context api to control form
const Login = () => {
  const [message, setMessage] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = () => {
    if (user.password.length > 5 && formValid === false) {
      setFormValid(true);
    } else if (user.password.length <= 5 && formValid === true) {
      setFormValid(false);
    }
  };

  useEffect(() => {
    isFormValid();
  }, [user]);

  const submitUser = newUser => {
    return fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify(newUser)
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    submitUser(user)
      .then(res => res.json())
      .then(response => {
        // Login succeeded: redirect to signup page
        // Login failed: display response message
        response.success ? setLoginSuccess(true) : setMessage(response.message);
      })
      .catch(err => typeof err === 'string' && setMessage(err));
  };

  if (loginSuccess) return <Redirect to='/profile' />;

  return (
    <Card className={styles.loginFormContainer}>
      <div className={styles.validator}>
        <h1>Login to Account</h1>
        <CheckAnimation formValid={formValid} />
      </div>

      {/* TODO: refactor to use a Message component */}
      {message && <h3>{message}</h3>}

      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <label>Email:</label>
        <input type='email' name='email' onChange={handleChange} value={user.email} required />
        <label>Password:</label>
        <input
          type='password'
          name='password'
          onChange={handleChange}
          value={user.password}
          required
          minLength='6'
        />
        <Button text='Login' />
      </form>
    </Card>
  );
};

export default Login;
