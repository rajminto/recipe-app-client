import React, { useState } from 'react';
import { arrayOf, shape, bool } from 'prop-types';
import styles from './recipe-instructions-list.module.scss';

// Component Imports
import RecipeInstruction from './RecipeInstruction';
import ToggleButton from '../../shared/ToggleButton';
import Card from '../../shared/Card';
import EditRecipeInstruction from './EditRecipeInstruction';

const RecipeInstructionsList = ({ instructions, editModeActivated, setRecipeInfo, recipeInfo }) => {
  const {
    container,
    instructionsListCard,
    ingredientInstructionInput,
    deleteButtonWrapper
  } = styles;

  const deleteInstruction = index => {
    const newInstructions = instructions.filter((instruction, i) => i !== index);
    setRecipeInfo({ ...recipeInfo, instructions: newInstructions });
  };

  const updateInstructionList = (id, value) => {
    const newInstructions = instructions.map((instruction, i) => {
      if (i === id) {
        instruction.description = value;
      }
      return instruction;
    });
    setRecipeInfo({ ...recipeInfo, instructions: newInstructions });
  };

  const handleInstructionChange = (value, id) => {
    updateInstructionList(id, value);
  };

  const instructionsCompononents = instructions.map((instruction, i) => {
    if (editModeActivated) {
      return (
        <div className={ingredientInstructionInput} key={instruction.id}>
          <EditRecipeInstruction
            instructionId={instruction.id}
            description={instruction.description}
            order={instruction.order}
            handleInstructionChange={handleInstructionChange}
            recipeInfo={recipeInfo}
          />
          <div className={deleteButtonWrapper} onClick={() => deleteInstruction(i)}>
            <ToggleButton variant='delete' />
          </div>
        </div>
      );
    }
    return (
      <RecipeInstruction
        key={instruction.id}
        description={instruction.description}
        order={instruction.order}
      />
    );
  });

  return (
    <Card className={container}>
      <h2>Instructions</h2>
      <Card className={instructionsListCard}>{instructionsCompononents}</Card>
    </Card>
  );
};

RecipeInstructionsList.propTypes = {
  editModeActivated: bool.isRequired,
  instructions: arrayOf(shape({})).isRequired
};

export default RecipeInstructionsList;
