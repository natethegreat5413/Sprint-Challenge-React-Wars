import React, {useState, useEffect } from 'react'
import axios from 'axios';
import Cards from './Card';

// Write your Character component here
const CharacterCards = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/people')
    .then(res => {
      setCharacters(res.data)
      debugger
    })
    .catch(err => {
      console.log('error', err);
    });
  }, []);
}






