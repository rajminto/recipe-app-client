import React from 'react';
import PropTypes from 'prop-types';
import './recipe-instruction.module.scss';

const RecipeInstruction = ({ description, order }) => (
  <div>
    <p>
      {order}. {description}
    </p>
  </div>
);

RecipeInstruction.propTypes = {
  description: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired
};

export default RecipeInstruction;
