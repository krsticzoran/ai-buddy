import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ChatInterface from "../chat/chatInterface/ChatInterface";
import MenuContainer from "../menu/MenuContainer";

const ChatPage = (props) => {
  return (
    <Container fluid className="g-0 ">
      <Row className="g-0 ">
        <Col md={3}>
          <MenuContainer></MenuContainer>
        </Col>
        <Col md={9}>
          <ChatInterface></ChatInterface>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatPage;
