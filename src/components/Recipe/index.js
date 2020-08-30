import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import './recipe.scss';

// Component Imports
import RecipeHeader from './RecipeHeader';
import RecipeIngredientsList from './RecipeIngredientsList';
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
  } = recipe;

  return (
    <div className='recipe-container'>
      <RecipeHeader
        name={name}
        user_name={users[0].name}
        img_url={img_url}
        tags={tags}
        description={description}
        prep_time={prep_time}
        cook_time={cook_time}
      />
      <div className='bot-recipe-info'>
        <RecipeIngredientsList ingredients={ingredients} />
        <RecipeInstructionsList instructions={instructions} />
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: shape({
    name: string.isRequired,
    instructions: arrayOf(shape({})).isRequired,
    ingredients: arrayOf(shape({})).isRequired,
    description: string.isRequired,
    img_url: string.isRequired,
    prep_time: string.isRequired,
    cook_time: string.isRequired,
    tags: arrayOf(shape({})).isRequired,
    users: arrayOf(
      shape({
        name: string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default Recipe;
