// import { Component } from 'react';
import { useEffect, useState } from 'react';

import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';
import './App.css';



const App = () => {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')
  const [filteredMonsters, setFilterMonsters] = useState(monsters)


  const fetchPokemons =  () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((monsters) => setMonsters(monsters))
  }
  useEffect( () => {
    fetchPokemons()
  }, [])

  useEffect( () => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilterMonsters(newFilteredMonsters)

  }, [monsters, searchField])

  

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }
 

 
  
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex </h1>

        <SearchBox onChange={onSearchChange}
          placeholder='search monsters'
          className='monsters-search-box' />
        <CardList monsters={filteredMonsters} />
    </div> 
  )
}
// class App extends Component { 
//   constructor() {
//     super();


//     this.state = {
//       monsters: [],
//       searchString: ''
//     };
//   }

//   // fetches the api as soon as the page renders
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users }
//       },
//         () => {
//           console.log(this.state);
//         }
//       ))
//   }
//   // to grab the search string on change
//   onSearchChange = (event) => {
//     const searchString = event.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return { searchString }
//     })
//   }


//   render() {
//     const { monsters, searchString } = this.state;
//     const { onSearchChange } = this

//     // to filter the monsters list to the search input
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchString)
//     })


//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex </h1>

//         <SearchBox onChange={onSearchChange}
//           placeholder='search monsters'
//           className='monsters-search-box' />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }

// }

export default App;
