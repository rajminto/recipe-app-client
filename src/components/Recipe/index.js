import React from 'react'
import './recipe.css'

// Component Imports
import TagsList from './TagsList'
import RecipeHeader from './RecipeHeader'


const Recipe = ({ recipe }) => {
  const { 
    name,
    description,
    img_url,
    prep_time,
    cook_time,
    user_name,
    instructions,
    ingredients,
    tags
  } = recipe

  return (
    <div>
      <RecipeHeader
        name={name}
        user_name={user_name}
        img_url={img_url}
      />
      <TagsList tags={tags} />
    </div>
  )
}

export default Recipe