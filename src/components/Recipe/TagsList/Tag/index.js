import React from 'react';
import { string } from 'prop-types';
import styles from './tag.module.scss';

const Tag = ({ name }) => (
  <div className={styles.tagShape}>
    <strong>#{name} </strong>
  </div>
);

Tag.propTypes = {
  name: string.isRequired
};

export default Tag;
