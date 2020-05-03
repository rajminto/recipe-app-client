import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from './context';
import Header from './components/shared/Header/index';
import PageContent from './components/PageContent/index';
import './styles/main-styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider>
        <Router>
          <div className="container">
            <Route path="/" component={Header} />
            <Route path="/" component={PageContent} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
