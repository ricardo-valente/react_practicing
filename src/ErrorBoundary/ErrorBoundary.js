import React, { Component } from 'react'

class ErrorBoundery extends Component {

  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    })
  }

  render() {
    return this.state.hasError
      ? <h1>{this.state.errorMessage}</h1>
      : <h1>{this.props.children}</h1>
  }
}

export default ErrorBoundery