import React from 'react'
import styles from './recipe-instructions-list.module.scss'

// Component Imports
import RecipeInstruction from './RecipeInstruction'
import Card from '../../shared/Card'

const RecipeInstructionsList = ({ instructions }) => {
  const instructionsCompononents = instructions.map(instruction => (
    <RecipeInstruction
      key={instruction.id}
      description={instruction.description}
      order={instruction.order}
    />
  ))
  
  return (
    <Card className={styles.container}>
      <h2>Instructions</h2>
      <Card className={styles.instructionsListCard}>
        {instructionsCompononents}
      </Card>
    </Card>
  )

    // < Card className = { styles.ingredientsListContainer } >
    //   <h2>Recipe Ingredients</h2>
    //   <Card className={styles.ingredientsListCard}>
    //     {ingredientComponents}
    //   </Card>
    // </Card >
}

export default RecipeInstructionsList