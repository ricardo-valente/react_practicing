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

  removeCharHandler = char => {
    const newState = {
      ...this.state
    }
    const inputValue = newState.inputValue.split('')
    const charIndex = inputValue.indexOf(char)
    inputValue.splice(charIndex, 1)
    this.setState({
      inputLength: inputValue.length,
      inputValue: inputValue.join('')
    })
  }

  render() {
    return (
      <div className="app">
        <div className="app__input">
          <input type="text" onChange={this.inputLengthHandler} value={this.state.inputValue} />
          <p>{this.state.inputLength}</p>
        </div>
        <div className="app__validator">
          <Validator inputLength={this.state.inputLength} />
        </div>
        <div className="app__chars">
          {
            this.state.inputValue.split('').map((char, index) => {
              return <CharBox id={index} char={char} clickEvent={() => this.removeCharHandler(char)} />
            })
          }
        </div>
      </div>
    )
  }
}

export default App