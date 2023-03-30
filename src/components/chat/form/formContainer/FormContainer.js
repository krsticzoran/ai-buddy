import { Container, Row, Col, InputGroup } from "react-bootstrap";
import "./form-container.css";
const FormContainer = (props) => {
  return (
    <div className="container-input bg-secondary">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <InputGroup className="mb-3 position-relative  ">
              {props.children}
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormContainer;