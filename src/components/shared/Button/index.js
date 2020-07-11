import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ clickFunc, text }) => {
  return (
    <>
      <button className={styles['ui-btn']} type='submit' onClick={clickFunc}>
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  clickFunc: PropTypes.func,
  text: PropTypes.string.isRequired
};

Button.defaultProps = {
  clickFunc: null
};

export default Button;
