import React, { useContext, useState } from 'react';
import { string } from 'prop-types';
import styles from './recipe-header.module.scss';
import { ReactComponent as EditPencilSVG } from '../../../assets/svgs/pencil.svg';
import { Context } from '../../../context';

import Card from '../../shared/Card';
import Star from '../../shared/Star';

const RecipeHeader = ({
  name,
  user_name,
  img_url,
  description,
  prep_time,
  cook_time,
  editModeActivated,
  setEditModeActivated
}) => {
  const [editModeChosen, setEditModeChosen] = useState(false);
  const context = useContext(Context);
  const {
    editIcon,
    editIconSelected,
    cardsContainer,
    headerCard,
    timesContainer,
    recThumb,
    headerIconWrap,
    recipeHeaderContainer,
    title
  } = styles;

  const handleToggleEditMode = () => {
    setEditModeChosen(!editModeChosen);
  };

  return (
    <Card className={recipeHeaderContainer}>
      <div className={headerIconWrap}>
        <div
          className={`${editIcon} ${editModeChosen && editIconSelected}`}
          onClick={() => {
            console.log(editModeActivated);
            handleToggleEditMode();
            setEditModeActivated(!editModeActivated);
          }}
        >
          <EditPencilSVG />
        </div>
        <Star handleStarClick={() => console.log('star clicked')} />
      </div>
      <div className={title}>
        <h1> {name} </h1> <h3> By: {user_name} </h3>
      </div>
      <div className={cardsContainer}>
        <Card className={headerCard}>
          <img src={img_url} className={recThumb} alt='food_pic' />
        </Card>
        <Card className={headerCard}>
          <p> {description} </p>
          <div className={timesContainer}>
            <p> Prep: {prep_time} </p> <p> Cook: {cook_time} </p>
          </div>
        </Card>
      </div>
    </Card>
  );
};

RecipeHeader.propTypes = {
  name: string.isRequired,
  user_name: string.isRequired,
  img_url: string.isRequired,
  description: string.isRequired,
  prep_time: string.isRequired,
  cook_time: string.isRequired
};

export default RecipeHeader;
