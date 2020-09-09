import React, { useState, useEffect } from 'react';
import { func, number, shape } from 'prop-types';
import styles from './EditRecipeInstruction.module.scss';

const EditRecipeInstruction = ({
  order,
  handleInstructionChange,
  recipeInfo,
  instructionIndex
}) => {
  const { editInputWrapper, editInput, editOrderNumber } = styles;
  const [text, setText] = useState(recipeInfo.instructions[instructionIndex]?.description);

  useEffect(() => {
    setText(recipeInfo.instructions[instructionIndex]?.description);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNewTextChange = editText => {
    setText(editText);
  };

  return (
    <div className={editInputWrapper}>
      <p className={editOrderNumber}>{order}.</p>
      <input
        className={editInput}
        type='text'
        value={text}
        onChange={e => {
          handleInstructionChange(e.target.value, instructionIndex);
          handleNewTextChange(e.target.value);
        }}
        required
      />
    </div>
  );
};

EditRecipeInstruction.propTypes = {
  order: number.isRequired,
  recipeInfo: shape({}).isRequired,
  handleInstructionChange: func.isRequired,
  instructionIndex: number.isRequired
};

export default EditRecipeInstruction;
