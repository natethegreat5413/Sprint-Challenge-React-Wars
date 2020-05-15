// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './Card'

const Character = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get("https://swapi.py4e.com/api/people/")

        .then(res => {
            setCharacters(res.data.results)
            console.log(characters)
        })
        .catch(error => {
            console.log('There was an error', error)
        })

    }, [])

    return (
        <div className='starwars'>
            {characters.map(character => {
                return <Cards 
                    name={}
                    height={}
                    hairColor={}
                    eyeColor={}
                    gender={}
                    birthYear={}
                />
            })}
            

        </div>
    )
}

export default Character


