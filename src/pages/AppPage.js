import React from 'react';
import { Navigate } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Chat from '../components/chat/Chat';
import Menu from '../components/menu/Menu';

const AppPage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <Container fluid className="g-0">
      <Row className="g-0 ">
        <Col sm={12} md={4} lg={3} xxl={2}>
          <Menu />
        </Col>
        <Col sm={12} md={8} lg={9} xxl={10}>
          <Chat />
        </Col>
      </Row>
    </Container>
  );
};
export default AppPage;
