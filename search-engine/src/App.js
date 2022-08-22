import './App.css';
import React, { Component } from 'react'
import CardList from './components/card-list/CardList.component';
import SearchBox from './components/search-box/SearchBox.component';

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
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Enter Monster Name'
          className='search-box'
          onChangeHandler = {onSearchChange}
        />
        <CardList monsters= {filteredMonsters} />

      </div>
    )

  }
}

export default App;
