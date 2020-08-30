import React, { useState } from 'react';
import { func } from 'prop-types';
import styles from './Star.module.scss';
import { ReactComponent as StarSvg } from '../../../assets/svgs/star.svg';

const Star = ({ handleStarClick }) => {
  const { filled, starContainer } = styles;
  const [starFilled, setStarFilled] = useState(false);

  return (
    <div
      className={`${starContainer} ${starFilled && filled}`}
      onClick={() => {
        setStarFilled(!starFilled);
        handleStarClick();
      }}
    >
      <StarSvg />
    </div>
  );
};

Star.propTypes = {
  handleStarClick: func.isRequired
};

export default Star;
