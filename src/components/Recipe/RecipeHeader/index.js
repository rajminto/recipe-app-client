import React, { useState } from 'react';
import { string, bool, func } from 'prop-types';
import styles from './recipe-header.module.scss';
import { ReactComponent as EditPencilSVG } from '../../../assets/svgs/pencil.svg';

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
          {editModeActivated ? (
            <div className={styles.editInputWrapper}>
              <input
                className={styles.editInput}
                type='text'
                value={description}
                onChange={e => console.log(e.target.value)}
                required
              />
            </div>
          ) : (
            <p> {description} </p>
          )}
          <div className={timesContainer}>
            {editModeActivated ? (
              <div className={styles.editInputWrapper}>
                <input
                  className={styles.editInput}
                  type='text'
                  value={prep_time}
                  onChange={e => console.log(e.target.value)}
                  required
                />
                <input
                  className={styles.editInput}
                  type='text'
                  value={cook_time}
                  onChange={e => console.log(e.target.value)}
                  required
                />
              </div>
            ) : (
              <>
                <p> Prep: {prep_time} </p> <p> Cook: {cook_time} </p>
              </>
            )}
          </div>
        </Card>
      </div>
    </Card>
  );
};

RecipeHeader.propTypes = {
  editModeActivated: bool.isRequired,
  setEditModeActivated: func.isRequired,
  name: string.isRequired,
  user_name: string,
  img_url: string.isRequired,
  description: string.isRequired,
  prep_time: string.isRequired,
  cook_time: string.isRequired
};

RecipeHeader.defaultProps = {
  user_name: ''
};

export default RecipeHeader;
