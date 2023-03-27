import React from "react";
import { Card } from "react-bootstrap";

const MyCard = (props) => {
  return (
    <Card>
      {props.messages.map((message, index) => (
        <Card.Body key={index}>{message}</Card.Body>
      ))}
    </Card>
  );
};

export default MyCard;
