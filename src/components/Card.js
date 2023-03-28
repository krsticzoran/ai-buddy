import React, { useRef, useEffect } from "react";
import { Card } from "react-bootstrap";
import "../styles/my-card.css";

const MyCard = (props) => {
  const cardRef = useRef(null);

  useEffect(() => {
    cardRef.current.scrollTop = cardRef.current.scrollHeight;
  }, [props.messages]);

  return (
    <div className="my-card" ref={cardRef}>
      <Card className="border-0">
        {props.messages.map((message, index) => (
          <Card.Body key={index}>{message}</Card.Body>
        ))}
      </Card>
    </div>
  );
};

export default MyCard;
