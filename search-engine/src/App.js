import './App.css';
import React, { Component } from 'react'
 
class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => this.setState(() => {
      return {
        monsters:users
      }
    }))

  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState({searchField})
  }

  render() 
      {
        const { monsters, searchField} = this.state;
        const { onSearchChange } = this;

        const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField)
      })

    return (
      <div>
        <input 
          placeholder='Enter Monster Name'
          type='search' 
          onChange={ onSearchChange }
        />

        {
          filteredMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        }

      </div>
    )

  }
}

export default App;
