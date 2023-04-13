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
    <Container>
      <Row className="justify-content-center ">
        <Col md={10}>
          <div className="my-card " ref={cardRef}>
            <Card className="card-background border-0 flex flex-col gap-3">
              {props.messages.map((message, index) => (
                <div
                  key={index}
                  className={
                    index % 2 == 0 ? "chat-card-color" : "chat-card-color-dark"
                  }
                >
                  <Card.Body className="chat-card-padding text-dark ">
                    {message}
                  </Card.Body>
                </div>
              ))}
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatCard;
