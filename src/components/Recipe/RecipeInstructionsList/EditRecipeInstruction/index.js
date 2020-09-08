import React from 'react';
import { func, number, shape } from 'prop-types';
import styles from './EditRecipeInstruction.module.scss';

const EditRecipeInstruction = ({ order, handleInstructionChange, instructionId, recipeInfo }) => {
  const { editInputWrapper, editInput, editOrderNumber } = styles;

  return (
    <div className={editInputWrapper}>
      <p className={editOrderNumber}>{order}.</p>
      <input
        className={editInput}
        type='text'
        value={recipeInfo.instructions[instructionId - 1].description}
        onChange={e => handleInstructionChange(e.target.value, instructionId)}
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
