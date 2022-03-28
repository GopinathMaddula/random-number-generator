import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generatingRandomNumber = () =>
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})

  render() {
    const {randomNumber} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the <br />
            range of 0 to 100
          </p>
          <button
            className="generate-button"
            type="button"
            onClick={this.generatingRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
