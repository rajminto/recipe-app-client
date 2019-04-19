import React from 'react'
import './recipe-instructions-list.css'

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
    <div>
      <h2>Recipe Instructions</h2>
      {instructionsCompononents}
    </div>
  )
}

export default RecipeInstructionsList