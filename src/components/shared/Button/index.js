import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ clickFunc, text }) => {
  return (
    <>
      <button className={styles['ui-btn']} type='submit' onClick={clickFunc && clickFunc}>
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  clickFunc: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
