import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/index';
import PageContent from './components/PageContent/index';
import './styles/main-styles.scss'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" component={Header} />
          <Route path="/" component={PageContent} />
        </div>
      </Router>
    )
  }
}

export default App
