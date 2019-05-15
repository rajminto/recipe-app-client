import React from 'react'
import styles from './card.module.scss'

const Card = (props) => (
  <div className={`${styles.cardContainer} ${props.className}`}>
    {props.children}
  </div>
)

export default Card
