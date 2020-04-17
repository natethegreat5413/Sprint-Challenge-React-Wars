import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
     CardText } from 'reactstrap';

const Cards = (props) => {
  
  return (
     <Card>
       <CardBody>
        <CardHeader>{props.name}</CardHeader>
        <CardText>{props.height}</CardText>
        <CardText>{props.mass}</CardText>
        <CardText>{props.hairColor}</CardText>
        <CardText>{props.eyeColor}</CardText>
        <CardText>{props.birthYear}</CardText>
        <CardText>{props.gender}</CardText>
      </CardBody>
    </Card>

    );
    };
export default Cards;
