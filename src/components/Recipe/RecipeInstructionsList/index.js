import React, { useContext } from 'react';
import { arrayOf, shape } from 'prop-types';
import styles from './recipe-instructions-list.module.scss';
import { Context } from '../../../context';

// Component Imports
import RecipeInstruction from './RecipeInstruction';
import Card from '../../shared/Card';
import EditRecipeInstruction from './EditRecipeInstruction';

const RecipeInstructionsList = ({ instructions, editModeActivated }) => {
  const context = useContext(Context);
  const { container, instructionsListCard } = styles;

  const instructionsCompononents = instructions.map(instruction => {
    if (editModeActivated) {
      return (
        <EditRecipeInstruction
          key={instruction.id}
          description={instruction.description}
          order={instruction.order}
        />
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
  instructions: arrayOf(shape({})).isRequired
};

export default RecipeInstructionsList;
