import React from 'react';
import './recipe-instruction.module.scss';

const RecipeInstruction = ({ description, order }) => (
  <div>
    <p>
      {order}. {description}
    </p>
  </div>
);

export default RecipeInstruction;
