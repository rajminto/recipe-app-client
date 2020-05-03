import React from 'react';
import PropTypes from 'prop-types';
import styles from './tag.module.scss';

const Tag = ({ name }) => (
  <div className={styles.tagShape}>
    <strong>#{name} </strong>
  </div>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired
};

export default Tag;
