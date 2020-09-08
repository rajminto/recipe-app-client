import React, { useState } from 'react';
import { func, number, shape } from 'prop-types';
import styles from './EditRecipeInstruction.module.scss';

const EditRecipeInstruction = ({ order, handleInstructionChange, instructionId, recipeInfo }) => {
  const { editInputWrapper, editInput, editOrderNumber } = styles;
  const [text, setText] = useState(recipeInfo.instructions[instructionId - 1].description);

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
          // handleInstructionChange(e.target.value, instructionId);
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
  instructionId: number.isRequired
};

export default EditRecipeInstruction;
