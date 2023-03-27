import React from "react";
import { Card } from "react-bootstrap";

const MyCard = (props) => {
  const { messages } = props;

  return (
    <Card>
      {messages.map((message, index) => (
        <Card.Body key={index}>{message}</Card.Body>
      ))}
    </Card>
  );
};

export default MyCard;
