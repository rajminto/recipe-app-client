import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './page-content.module.scss';

// COMPONENT IMPORT //
import Home from '../pages/Home';
import AddRecipe from '../pages/AddRecipe/AddRecipe.connector';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Navigator from '../shared/Navigator';
import SearchRecipes from '../pages/SearchRecipes';
import RecipeDetail from '../pages/RecipeDetail';
import BrowseRecipes from '../pages/BrowseRecipes';

const PageContent = () => {
  const { container } = styles;
  return (
    <div className={container}>
      <Navigator />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/recipes/create' component={AddRecipe} />
        <Route exact path='/recipes/search' component={SearchRecipes} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/recipes/browse' component={BrowseRecipes} />
        <Route path='/recipes/:id' component={RecipeDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default PageContent;
