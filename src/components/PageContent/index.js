import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import styles from './page-content.module.scss';

// COMPONENT IMPORT //
import Home from '../pages/Home';
import AddRecipe from '../pages/AddRecipe';
import NotFound from '../pages/NotFound';
import Navigator from '../shared/Navigator';

class PageContent extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  //

  render() {
    const { container } = styles;
    return (
      <div className={container}>
        <Navigator />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddRecipe} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}
export default PageContent; 