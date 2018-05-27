import React, { Component } from 'react'
import Validator from './validation/validationComponent'
import CharBox from './validation/charComponent'

class App extends Component {

  state = {
    inputValue: ''
  }

  inputChangeHandler = event => {
    const newState = {
      ...this.state
    }
    newState.inputValue = event.target.value
    this.setState({
      inputValue: newState.inputValue,
    })
  }

  removeCharHandler = index => {
    const newState = {
      ...this.state
    }
    const inputValue = newState.inputValue.split('')
    inputValue.splice(index, 1)
    this.setState({
      inputValue: inputValue.join('')
    })
  }

  render() {
    const charsList = this.state.inputValue.split('').map((char, index) => {
      return <CharBox key={index} char={char} clickEvent={() => this.removeCharHandler(index)} />
    })
    return (
      <div className="app">
        <div className="app__input">
          <input type="text" onChange={this.inputChangeHandler} value={this.state.inputValue} />
          <p>{this.state.inputValue.length}</p>
        </div>
        <div className="app__validator">
          <Validator inputLength={this.state.inputValue.length} />
        </div>
        <div className="app__chars">
          {charsList}
        </div>
      </div>
    )
  }
}

export default App