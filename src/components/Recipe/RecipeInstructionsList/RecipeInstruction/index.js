import React from 'react';
import { number, string } from 'prop-types';
import './recipe-instruction.module.scss';

const RecipeInstruction = ({ description, order }) => (
  <div>
    <p>
      {order}. {description}
    </p>
  </div>
);

RecipeInstruction.propTypes = {
  description: string.isRequired,
  order: number.isRequired
};

export default RecipeInstruction;
