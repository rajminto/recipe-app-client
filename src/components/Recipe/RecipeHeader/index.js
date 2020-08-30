import React from 'react';
import { string } from 'prop-types';
import styles from './recipe-header.module.scss';

import Card from '../../shared/Card';

const RecipeHeader = ({ name, user_name, img_url, description, prep_time, cook_time }) => (
  <Card className={styles.recipeHeaderContainer}>
    <div className={styles.title}>
      <h1> {name} </h1> <h3> By: {user_name} </h3>
    </div>
    <div className={styles.cardsContainer}>
      <Card className={styles.headerCard}>
        <img src={img_url} className={styles.recThumb} alt='food_pic' />
      </Card>
      <Card className={styles.headerCard}>
        <p> {description} </p>
        <div className={styles.timesContainer}>
          <p> Prep: {prep_time} </p> <p> Cook: {cook_time} </p>
        </div>
      </Card>
    </div>
  </Card>
);

RecipeHeader.propTypes = {
  name: string.isRequired,
  user_name: string.isRequired,
  img_url: string.isRequired,
  description: string.isRequired,
  prep_time: string.isRequired,
  cook_time: string.isRequired
};

export default RecipeHeader;
