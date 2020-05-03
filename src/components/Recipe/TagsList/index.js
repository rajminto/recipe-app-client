import React from 'react';
import styles from './tags-list.module.scss';

// Component Imports
import Tag from './Tag';

const TagsList = ({ tags }) => {
  const tagComponents = tags.map(tag => <Tag key={tag.id} name={tag.name} />);

  return <div className={styles.tagList}>{tagComponents}</div>;
};

export default TagsList;
