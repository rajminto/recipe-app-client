import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './home.module.scss';
import Button from '../../shared/Button';

const Home = () => {
  const { homeButtonWrapper, homeContainer, splashTitle, welcomePanel } = styles;
  const history = useHistory();

  const handleMainBtnClick = dest => {
    history.push(dest);
  };

  return (
    <div className={homeContainer}>
      <div className={welcomePanel}>
        <h1 className={splashTitle}>SAVVORED</h1>
        <div className={homeButtonWrapper}>
          <Button text='Browse Recipes' clickFunc={() => handleMainBtnClick('/recipes/browse')} />
          <Button text='Create Recipe' clickFunc={() => handleMainBtnClick('/recipes/create')} />
        </div>
      </div>
    </div>
  );
};

export default Home;
