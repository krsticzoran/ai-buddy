import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ChatInterface from "../components/chat/chatInterface/ChatInterface";
import MenuContainer from "../components/menu/MenuContainer";
import AuthContext from "../store/auth-contex";
import { Navigate } from "react-router-dom";

const AppPage = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <Container fluid className="g-0 ">
      <Row className="g-0 ">
        <Col md={2}>
          <MenuContainer></MenuContainer>
        </Col>
        <Col md={10}>
          <ChatInterface></ChatInterface>
        </Col>
      </Row>
    </Container>
  );
};

export default AppPage;
