import React from 'react'
import {
    Card,
    CardHeader,
    CardText,
    CardBody,
    CardSubtitle,
    Badge,
    Col,
    Spinner
  } from "reactstrap";

  const Cards = ({name, height, hairColor, eyeColor, gender, birthYear}) => {
      return (
        <div className="details">
            <h2>{name}</h2>
            <p>{height}</p>
            <p>{hairColor}</p>
            <p>{eyeColor}</p>
            <p>{gender}</p>
            <p>{birthYear}</p>
        </div>
      )
  }



  export default Cards