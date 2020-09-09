import React, { useEffect, useState } from 'react';
import { arrayOf, shape, bool, number, func } from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './recipe-instructions-list.module.scss';

// Component Imports
import RecipeInstruction from './RecipeInstruction';
import ToggleButton from '../../shared/ToggleButton';
import Card from '../../shared/Card';
import EditRecipeInstruction from './EditRecipeInstruction';

const RecipeInstructionsList = ({
  editModeActivated,
  setRecipeInfo,
  recipeInfo,
  setEditedInstructionList
}) => {
  // const {
  //   container,
  //   instructionsListCard,
  //   ingredientInstructionInput,
  //   deleteButtonWrapper
  // } = styles;

  const [newList, setNewList] = useState([]);

  useEffect(() => {
    if (recipeInfo) {
      setNewList(recipeInfo.instructions);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeInfo.instructions]);

  useEffect(() => {
    setEditedInstructionList(newList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newList]);

  const deleteInstruction = index => {
    const newInstructions = recipeInfo.instructions.filter((instruction, i) => i !== index);
    setRecipeInfo({ ...recipeInfo, instructions: newInstructions });
  };

  const updateInstructionList = (value, id) => {
    setNewList(
      newList?.map((item, i) => {
        if (i !== id) return item;
        return { ...item, description: value };
      })
    );
  };

  const handleInstructionChange = (value, id) => {
    updateInstructionList(value, id);
  };

  const instructionsCompononents = recipeInfo.instructions?.map((instruction, i) => {
    if (editModeActivated) {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <TransitionGroup>
          <CSSTransition
            key={i}
            timeout={1000}
            mountOnEnter
            unmountOnExit
            classNames={{
              enter: styles['fade-enter'],
              exit: styles['fade-exit'],
              enterActive: styles['fade-enter-active'],
              exitActive: styles['fade-exit-active']
            }}
          >
            <div className={styles.ingredientInstructionInput} key={i}>
              <EditRecipeInstruction
                instructionIndex={i}
                description={instruction.description}
                order={instruction.order}
                handleInstructionChange={handleInstructionChange}
                recipeInfo={recipeInfo}
              />
              <div className={styles.deleteButtonWrapper} onClick={() => deleteInstruction(i)}>
                <ToggleButton variant='delete' />
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      );
    }
    return (
      // eslint-disable-next-line react/no-array-index-key
      <RecipeInstruction key={i} description={instruction.description} order={instruction.order} />
    );
  });

  return (
    <Card className={styles.container}>
      <h2>Instructions</h2>
      <Card className={styles.instructionsListCard}>{instructionsCompononents}</Card>
    </Card>
  );
};

RecipeInstructionsList.propTypes = {
  setRecipeInfo: func.isRequired,
  recipeInfo: shape({}).isRequired,
  editModeActivated: bool.isRequired,
  instructions: arrayOf(
    shape({
      order: number
    })
  ),
  setEditedInstructionList: func.isRequired
};

RecipeInstructionsList.defaultProps = {
  instructions: []
};

export default RecipeInstructionsList;
