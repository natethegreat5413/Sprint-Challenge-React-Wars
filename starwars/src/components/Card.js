import React from 'react'
import {
    
    CardHeader,
    
    Col
  } from "reactstrap";
import styled from 'styled-components'

  const StyledBody = styled.div`
    background-color: lightgrey;
  `
  const StyledCards = styled.div`
    background-color: lightgrey;
    padding:5px;
    -webkit-box-shadow: 0 10px 6px -6px #777;
       -moz-box-shadow: 0 10px 6px -6px #777;
            box-shadow: 0 10px 6px -6px #777;
    margin: 2% 0;
    border-radius: 10px;
    transition: transform .2s;

    :hover {
        transform: scale(1.1);
        color: white;
        text-transform: uppercase;
    }
  `

const StyledHeader = styled.div`
    background-color: indianred;
    border-radius: 7px;
    padding: 3px;
`
const StyledP = styled.p`
    border-bottom: 1px solid black;
`
const PDIv = styled.div`
    margin: 3% 10%;
`
  const Cards = ({name, height, hairColor, eyeColor, gender, birthYear}) => {
      
      return (
        <Col xs="6">
            <StyledCards className="details">
                <StyledHeader>
                <h2>{name}</h2>
                </StyledHeader>
                    <StyledBody>
                        <PDIv className='pDiv'>
                            <StyledP>Height: {height}</StyledP>
                            <StyledP>Hair Color: {hairColor}</StyledP>
                            <StyledP>Eye Color: {eyeColor}</StyledP>
                            <StyledP>Gender: {gender}</StyledP>
                            <StyledP>Birth Year: {birthYear}</StyledP>
                        </PDIv>
                    </StyledBody>
            </StyledCards>
        </Col>
      )
  }



  export default Cards