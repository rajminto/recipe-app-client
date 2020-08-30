import React from 'react';
import { arrayOf, shape } from 'prop-types';
import styles from './tags-list.module.scss';

// Component Imports
import Tag from './Tag';

const TagsList = ({ tags }) => {
  const tagComponents = tags.map(tag => <Tag key={tag.id} name={tag.name} />);

  return <div className={styles.tagList}>{tagComponents}</div>;
};

TagsList.propTypes = {
  tags: arrayOf(shape({})).isRequired
};

export default TagsList;
