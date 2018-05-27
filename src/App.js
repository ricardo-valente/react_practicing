import React, { Component } from 'react'
import Validator from './validation/validationComponent'
import CharBox from './validation/charComponent'

class App extends Component {

  state = {
    inputLength: 0,
    inputValue: ''
  }

  inputLengthHandler = event => {
    const newState = {
      ...this.state
    }
    newState.inputLength = event.target.value.length
    newState.inputValue = event.target.value
    this.setState({
      inputLength: newState.inputLength,
      inputValue: newState.inputValue,
    })
  }

  stringToArray = string => string.split('')

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
        <div className="app__chars">
          {
            this.stringToArray(this.state.inputValue).map(char => {
              return <CharBox char={char} />
            })
          }
        </div>
      </div>
    )
  }
}

export default App