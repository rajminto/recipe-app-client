import React, { Component } from 'react'
import Recipe from '../../Recipe';
import Alert from '../../shared/Alert';
//

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipe: {},
      isLoaded: false,
      showAlert: false
    }
  }
  //
  componentDidMount() {
    fetch('https://recipe-app-server.herokuapp.com/api/recipes/1')
      .then(res => res.json())
      .then(recipe => {
        this.setState({
          recipe: recipe.recipe,
          isLoaded: true
        })
      })
    setTimeout(() => {
      this.setState({ showAlert: !this.state.showAlert })
    }, 2000)
  }

  onClose = () => {
    this.setState({ showAlert: !this.state.showAlert })
  }
  //
  render() {
    return (
      <div className="home-container">
        <Alert 
          showAlert={this.state.showAlert}
          subText="Please Create A Recipe"
          onClose={this.onClose}
        />
        {this.state.isLoaded
          ? <Recipe recipe={this.state.recipe} />
          : <h2>Loading...</h2>
        }
      </div>
    )
  }
}
export default Home;

