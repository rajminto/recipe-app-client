import React from 'react'

import Card from '../Card'

const RecipeCardSmall = ({ recipe }) => {
  return (
    <Card>
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <p>{recipe.cook_time}</p>
    </Card>
  )
}

export default RecipeCardSmall