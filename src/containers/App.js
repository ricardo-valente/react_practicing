import React, { PureComponent } from 'react'
import appStyles from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../cockpit/Cockpit'
import Util from '../hoc/Util'
import withClass from '../hoc/withClass'

export const AuthContext = React.createContext(false)

class App extends PureComponent {
  constructor(props) {
    super(props)
    console.log('[App.js] init Constructor()', props)

    this.state = {
      persons: [
        { id: 'fd62fd', name: 'Ricardo', age: 31 },
        { id: '23sw2h', name: 'João', age: 25 },
        { id: '965j6y', name: 'Laurentino', age: 28 }
      ],
      otherState: 'some other name',
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }
  }

  componentWillMount() {
    console.log('[App.js] init componentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] init componentDidMount()')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE App.js] init componentWillReceiveProps()', nextProps)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     '[UPDATE App.js] init componentShouldUpdate()',
  //     nextProps,
  //     nextState
  //   )
  //   return nextProps.persons !== this.state.persons ||
  //     nextProps.otherState !== this.state.otherState ||
  //     nextProps.showPersons !== this.state.showPersons
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE App.js] init componentWillUpdate()',
      nextProps,
      nextState
    )
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      '[UPDATE App.js] init getDerivedStateFromProps()',
      nextProps,
      prevState
    )
    return prevState
  }

  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js] init getSnapshotBeforeUpdate()')
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] init componentDidUpdate()')
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState((prevState, props) => ({
      showPersons: !doesShow,
      toggleClicked: prevState.showPersons + 1,
    }))
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons: persons })
  }

  loginHandler = () => {
    this.setState({
      authenticated: true
    })
  }

  render() {
    console.log('[App.js] init render()')

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            onClick={this.deletePersonsHandler}
            onChange={this.changeNameHandler} />
        </div>
      )
    }

    return (
      <Util>
        <Cockpit
          appName={this.props.name}
          appAuthor={this.props.author}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          togglePersons={this.togglePersonsHandler}
          login={this.loginHandler} />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Util>
    )
  }
}

export default withClass(App, appStyles.App)