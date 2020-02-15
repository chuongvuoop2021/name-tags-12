import React, { Component } from 'react'

import { CardList } from './components/card-list/card-list'
import { SearchBox } from './components/search-box/search-box'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      people: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ people: users }))
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { people, searchField } = this.state;
    const filteredPeople = people.filter(person =>
      person.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className='App'>
        <h1>People List</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList people={filteredPeople} />
      </div>
    )
  }
}

export default App;
