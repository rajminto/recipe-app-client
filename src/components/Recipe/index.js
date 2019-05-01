import React from 'react'
import './recipe.scss'

// Component Imports
import TagsList from './TagsList'
import RecipeHeader from './RecipeHeader'
import RecipeDescription from './RecipeDescription'
import RecipeIngredientsList from './RecipeIngredientsList'
import RecipeInstructionsList from './RecipeInstructionsList';

const Recipe = ({ recipe }) => {
  const { 
    name,
    description,
    img_url,
    prep_time,
    cook_time,
    user,
    instructions,
    ingredients,
    tags
  } = recipe

  return (
    <div className="recipe-container">
      <RecipeHeader
        name={name}
        user_name={user.name}
        img_url={img_url}
      />
      <TagsList tags={tags} />
      <RecipeDescription
        description={description}
        prep_time={prep_time}
        cook_time={cook_time}
      />
      <div className="bot-recipe-info">
        <RecipeIngredientsList
          ingredients={ingredients}
        />
        <RecipeInstructionsList
          instructions={instructions}
        />
      </div>
    </div>
  )
}

export default Recipe