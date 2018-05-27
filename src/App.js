import React, { Component } from 'react';

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
        <input type="text" onChange={this.inputLengthHandler} />
        <p>{this.state.inputLength}</p>
      </div>
    )
  }
}

export default App;
