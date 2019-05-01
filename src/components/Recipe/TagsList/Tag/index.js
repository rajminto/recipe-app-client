import React from 'react'
import styles from './tag.module.scss';

const Tag = ({ name }) => (
  <div className={styles.tagShape}>
    <strong>#{name} </strong>
  </div>
)

export default Tag