import React from 'react';
import { string } from 'prop-types';
import styles from './EditRecipeInstruction.module.scss';

const EditRecipeInstruction = ({ description, order }) => {
  return (
    <div className={styles.editInputWrapper}>
      <p>{order}.</p>
      <input
        className={styles.editInput}
        type='text'
        value={description}
        onChange={() => console.log('clicked')}
        required
      />
    </div>
  );
};

EditRecipeInstruction.propTypes = {
  description: string.isRequired,
  order: string.isRequired
};

export default EditRecipeInstruction;
