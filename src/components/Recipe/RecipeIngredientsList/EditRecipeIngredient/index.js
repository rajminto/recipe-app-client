import React from 'react';
import { string } from 'prop-types';
import styles from './EditRecipeIngredient.module.scss';

const EditRecipeIngredient = ({ name }) => {
  return (
    <div className={styles.editInputWrapper}>
      <input
        className={styles.editInput}
        type='text'
        value={name}
        onChange={() => console.log('clicked')}
        required
      />
    </div>
  );
};

EditRecipeIngredient.propTypes = {
  name: string.isRequired
};

export default EditRecipeIngredient;
