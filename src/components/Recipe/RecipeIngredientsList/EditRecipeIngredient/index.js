import React, { useState, useEffect } from 'react';
import { func, number, shape } from 'prop-types';
import styles from './EditRecipeIngredient.module.scss';

const EditRecipeIngredient = ({ recipeInfo, ingredientIndex, handleIngredientChange }) => {
  const [text, setText] = useState(recipeInfo?.ingredients[ingredientIndex]?.name);

  useEffect(() => {
    setText(recipeInfo.ingredients[ingredientIndex]?.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNewTextChange = editText => {
    setText(editText);
  };
  return (
    <div className={styles.editInputWrapper}>
      <input
        className={styles.editInput}
        type='text'
        value={text}
        onChange={e => {
          handleIngredientChange(e.target.value, ingredientIndex);
          handleNewTextChange(e.target.value);
        }}
        required
      />
    </div>
  );
};

EditRecipeIngredient.propTypes = {
  recipeInfo: shape({}).isRequired,
  handleIngredientChange: func.isRequired,
  ingredientIndex: number.isRequired
};

export default EditRecipeIngredient;
