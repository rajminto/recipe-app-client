import React from 'react'
import './recipe-instruction.css'

const RecipeInstruction = ({ description, order }) => (
  <div>
    <p>{order}. {description}</p>
  </div>
)

export default RecipeInstruction