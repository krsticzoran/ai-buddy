import React, { useRef, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./chat-card.css";
import { Container, Row, Col } from "react-bootstrap";

const ChatCard = (props) => {
  const cardRef = useRef(null);

  useEffect(() => {
    cardRef.current.scrollTop = cardRef.current.scrollHeight;
  }, [props.messages]);

  return (
    <Container className="card-bacgorund-color">
      <div className="my-card " ref={cardRef}>
        <Card className="border-0 ">
          {props.messages.map((message, index) => (
            <div
              key={index}
              className={
                index % 2 == 0 ? "chat-card-color" : "chat-card-color-dark"
              }
            >
              <Card.Body className="chat-card-padding text-dark">
                {message}
              </Card.Body>
            </div>
          ))}
        </Card>
      </div>
    </Container>
  );
};

export default ChatCard;
