import React, { Fragment } from 'react'
import styles from './button.module.scss';


const Button = ({ clickFunc, text }) => {
    return (
      <Fragment>
        <button
          className={styles['ui-btn']}
          type="submit"
          onClick={clickFunc ? clickFunc : null}
        >
          {text}
        </button>
      </Fragment>
    )
  }

export default Button;