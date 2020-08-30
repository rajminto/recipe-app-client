import React from 'react';
import { arrayOf, shape } from 'prop-types';
import styles from './recipe-instructions-list.module.scss';

// Component Imports
import RecipeInstruction from './RecipeInstruction';
import Card from '../../shared/Card';

const RecipeInstructionsList = ({ instructions }) => {
  const instructionsCompononents = instructions.map(instruction => (
    <RecipeInstruction
      key={instruction.id}
      description={instruction.description}
      order={instruction.order}
    />
  ));

  return (
    <Card className={styles.container}>
      <h2>Instructions</h2>
      <Card className={styles.instructionsListCard}>{instructionsCompononents}</Card>
    </Card>
  );
};

RecipeInstructionsList.propTypes = {
  instructions: arrayOf(shape({})).isRequired
};

export default RecipeInstructionsList;
