import React from 'react';
import PropTypes from 'prop-types';
import './recipe-ingredient.module.scss';

const RecipeIngredient = ({ name, quantity }) => (
  <p>
    {quantity} {name}
  </p>
);

RecipeIngredient.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired
};

export default RecipeIngredient;
