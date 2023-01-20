import './App.css'
// import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
// import SearchBar from './components/SearchBar.jsx'

// import characters, { Rick } from './data.js'


// import characters from './data.js'

import { useState } from 'react';

import Nav from './components/Nav';

function App () {

  const [characters, setCharacters] = useState([
  // {
  //   name: 'Morty Smith',
  //   species: 'Human',
  //   gender: 'male',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  // }
  ]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then ((response) => response.json())
    .then((data) => {
      if (data.name){
        setCharacters((oldChars) => [...oldChars, data])
      } else {
        window.alert('No hay personajes con ese ID');
      }
    })
  }

  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== id))
  }


  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/>
      {/* <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr /> */}
      <div>
        <Cards
          onClose={onClose}
          characters={characters}
        />
      </div>
      {/* <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div> */}
    </div>
  )
}

export default App
