import { Container, Row } from "react-bootstrap";
import Logout from "./logout/Logout";

const MenuContainer = () => {
  return (
    <Container
      fluid
      style={{
        background: "#658BA7",
        height: "100vh",
      }}
    >
      <Row style={{ height: "10%" }}></Row>
      <Row style={{ height: "80%" }}></Row>
      <Row style={{ height: "10%" }}>
        <Logout></Logout>
      </Row>
    </Container>
  );
};

export default MenuContainer;
