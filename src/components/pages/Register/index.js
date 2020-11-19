import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './register.module.scss';

import Button from '../../shared/Button';
import Card from '../../shared/Card';

import { baseUrl } from '../../../api';

// TODO?: use context api to control form
const Register = () => {
  const [message, setMessage] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const submitNewUser = newUser => {
    return fetch(`${baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify(newUser)
    });
  };

  // TODO?: improve validation
  const validatePasswords = newUser => {
    return new Promise((resolve, reject) => {
      newUser.password !== newUser.password2 ? reject('Passwords do not match.') : resolve(newUser);
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    validatePasswords(user)
      .then(submitNewUser)
      .then(res => res.json())
      .then(response => {
        // Registration succeeded: redirect to signup page
        // Registration failed: display response message
        response.success ? setRegistrationSuccess(true) : setMessage(response.message);
      })
      .catch(err => typeof err === 'string' && setMessage(err));
  };

  if (registrationSuccess) return <Redirect to='/login' />;

  return (
    <Card className={styles.registerFormContainer}>
      <h1>Create an Account</h1>

      {/* TODO: refactor to use a Message component */}
      {message && <h3>{message}</h3>}

      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <label>Name:</label>
        <input type='text' name='name' onChange={handleChange} value={user.name} required />
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
        <label>Repeat Password:</label>
        <input
          type='password'
          name='password2'
          onChange={handleChange}
          value={user.password2}
          required
          minLength='6'
        />
        <Button text='Register' />
      </form>
    </Card>
  );
};

export default Register;
