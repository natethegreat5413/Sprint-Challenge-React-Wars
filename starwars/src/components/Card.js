import React from 'react'
import {
    Card,
    CardHeader,
    CardText,
    CardBody,
    CardColumns,
    CardDeck,
    Col
  } from "reactstrap";

  const Cards = ({name, height, hairColor, eyeColor, gender, birthYear}) => {
      return (
        <Col xs="6">
            <Card body inverse color="info" className="details">
                <CardHeader >
                <h2>{name}</h2>
                </CardHeader>
                    <CardBody>
                        <CardText>Height: {height}</CardText>
                        <CardText>Hair Color: {hairColor}</CardText>
                        <CardText>Eye Color: {eyeColor}</CardText>
                        <CardText>Gender: {gender}</CardText>
                        <CardText>Birth Year: {birthYear}</CardText>
                    </CardBody>
            </Card>
        </Col>
      )
  }



  export default Cards