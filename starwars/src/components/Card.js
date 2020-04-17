import React, {useState, useEffect } from 'react'
import axios from 'axios';
import Cards from './Characters';

// Write your Character component here
const CharacterCards = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
      setCharacters(res.data)
    })
    .catch(err => {
      console.log('error', err);
    });
  }, []);
}

return(

  characters.map(characters => {
    console.log(characters)
  })
)


export default CharacterCards

