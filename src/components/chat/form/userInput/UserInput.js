import React, { useState } from "react";
import SendButton from "../button/SendButton";
import Microphone from "../button/Microphone";
import FormContainer from "../formContainer/FormContainer";
import ButtonContainer from "../button/ButtonContainer";
import { FormControl } from "react-bootstrap";
import "./user-input.css";

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
    <FormContainer>
      <FormControl
        placeholder="Type your message here"
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={
          props.isLoading ? "border-0 form-disabled" : "border-0 form-control"
        }
        disabled={props.isLoading}
      />
      <ButtonContainer>
        <SendButton
          isLoading={props.isLoading}
          onClick={handleClick}
        ></SendButton>

        {input == "" && <Microphone />}
      </ButtonContainer>
    </FormContainer>
  );
};

export default UserInput;
