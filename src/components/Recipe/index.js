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
    users,
    instructions,
    ingredients,
    tags
  } = recipe

  return (
    <div className="recipe-container">
      <RecipeHeader
        name={name}
        user_name={users[0].name}
        img_url={img_url}
        tags={tags}
        description={description}
        prep_time={prep_time}
        cook_time={cook_time}
      />
      {/* <TagsList tags={tags} /> */}
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