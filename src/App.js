import React, { Component } from 'react'
import Validator from './validation/validationComponent'

class App extends Component {

  state = {
    inputLength: 0
  }

  inputLengthHandler = event => {
    this.setState({
      inputLength: event.target.value.length
    })
  }

  render() {
    return (
      <div className="app">
        <div className="app__input">
          <input type="text" onChange={this.inputLengthHandler} />
          <p>{this.state.inputLength}</p>
        </div>
        <div className="app__validator">
          <Validator inputLength={this.state.inputLength} />
        </div>
      </div>
    )
  }
}

export default App