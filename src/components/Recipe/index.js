import React from 'react';
import PropTypes from 'prop-types';
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
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    instructions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    description: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
    prep_time: PropTypes.string.isRequired,
    cook_time: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    users: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Recipe;
