import React, { Fragment } from 'react'
import styles from './button.module.scss';

const Button = ({ clickFunc }) => {
    return (
      <Fragment>
        <button 
          className={styles['ui-btn']} 
          type="submit"
          onClick={clickFunc ? clickFunc : null}
          >Add Recipe!
        </button>
      </Fragment>
    )
  }

export default Button;