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
      <Row className="justify-content-center">
        <Col md={10}>
          <div className="my-card " ref={cardRef}>
            <Card className="border-0 chat-card-color">
              {props.messages.map((message, index) => (
                <Card.Body key={index}>{message}</Card.Body>
              ))}
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatCard;
