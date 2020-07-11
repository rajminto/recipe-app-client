import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './home.module.scss';
import Button from '../../shared/Button';

const Home = props => {
  const { homeButtonWrapper, homeContainer, splashTitle, welcomePanel } = styles;

  const { history } = props;

  const handleMainBtnClick = dest => {
    history.push(dest);
  };

  return (
    <div className={homeContainer}>
      <div className={welcomePanel}>
        <h1 className={splashTitle}>SAVVORED</h1>
        <div className={homeButtonWrapper}>
          <Button text='Browse Recipes' clickFunc={() => handleMainBtnClick('/recipes')} />
          <Button text='Create Recipe' clickFunc={() => handleMainBtnClick('/add')} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Home);
