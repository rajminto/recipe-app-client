import React from 'react';
import { string } from 'prop-types';
import './recipe-ingredient.module.scss';

const RecipeIngredient = ({ name }) => {
  return <p>{name}</p>;
};

RecipeIngredient.propTypes = {
  name: string.isRequired
};

export default RecipeIngredient;
