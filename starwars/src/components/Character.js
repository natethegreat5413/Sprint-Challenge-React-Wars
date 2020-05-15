// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './Card'
import { Container, Row } from "reactstrap";

const Character = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get("https://swapi.py4e.com/api/people/")

        .then(res => {
            setCharacters(res.data.results)
            
        })
        .catch(error => {
            console.log('There was an error', error)
        })

    }, [])

    return (
        
    <div className='starwars'>
        <Container>
        <Row>
            {characters.map(character => {
                
                return <Cards 
                   
                    name={character.name}
                    height={character.height}
                    hairColor={character.hair_color}
                    eyeColor={character.eye_color}
                    gender={character.gender}
                    birthYear={character.birth_year}
                    />
            })}
        </Row>
        </Container>
                </div>
           
    )
}

export default Character


