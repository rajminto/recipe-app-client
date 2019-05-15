import React from 'react'
import styles from './card.module.scss'

const Card = (props) => (
  <div className={styles.cardContainer}>
    <h1>Hello Card</h1>
    {props.children}
  </div>
)

export default Card
