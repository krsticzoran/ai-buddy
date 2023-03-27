import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Chat from "./Chat";

const AppContainer = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}></Col>
        <Col md={9}>
          <Chat></Chat>
        </Col>
      </Row>
    </Container>
  );
};

export default AppContainer;
