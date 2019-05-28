import React, { Component } from 'react'

// Component imports
import Alert from '../../shared/Alert'
// import Loader from '../../shared/Loader'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showAlert: !this.state.showAlert })
    }, 2000)
  }

  onClose = () => {
    this.setState({ showAlert: !this.state.showAlert })
  }

  render() {
    return (
      <div className="home-container">
        <Alert 
          showAlert={this.state.showAlert}
          subText="Please Create A Recipe"
          onClose={this.onClose}
        />
        <h1>Welcome Home</h1>
      </div>
    )
  }
}
export default Home

