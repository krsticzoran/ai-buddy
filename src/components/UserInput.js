import React, { useState } from "react";
import SendButton from "./SendButton";
import Microphone from "./Microphone";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import "../styles/user-input.css";

const UserInput = (props) => {
  const [input, setInput] = useState("");

  const handleClick = () => {
    props.onData(input);
    setInput("");
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      props.onData(input);
      setInput("");
    }
  };

  return (
    <div className="container-input bg-secondary">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <InputGroup className="mb-3 position-relative  form-control:focus">
              <FormControl
                placeholder="Type your message here"
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="border-0 form-control"
              />
              <div
                className=" position-absolute top-50 end-0 translate-middle-y"
                onClick={props.onClick}
                style={{ zIndex: "999" }}
              >
                <SendButton
                  isLoading={props.isLoading}
                  onClick={handleClick}
                ></SendButton>

                <Microphone></Microphone>
              </div>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserInput;
