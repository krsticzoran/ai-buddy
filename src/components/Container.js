import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Chat from "./Chat";
import MenuContainer from "./MenuContainer";

const AppContainer = (props) => {
  return (
    <Container fluid className="g-0 ">
      <Row className="g-0 ">
        <Col md={3}>
          <MenuContainer></MenuContainer>
        </Col>
        <Col md={9}>
          <Chat></Chat>
        </Col>
      </Row>
    </Container>
  );
};

export default AppContainer;
