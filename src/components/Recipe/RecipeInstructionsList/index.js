import React from 'react'
import styles from './recipe-instructions-list.module.scss'

// Component Imports
import RecipeInstruction from './RecipeInstruction'

const RecipeInstructionsList = ({ instructions }) => {
  const instructionsCompononents = instructions.map(instruction => (
    <RecipeInstruction
      key={instruction.id}
      description={instruction.description}
      order={instruction.order}
    />
  ))
  
  return (
    <div className={styles.container}>
      <h2>Recipe Instructions</h2>
      {instructionsCompononents}
    </div>
  )
}

export default RecipeInstructionsList