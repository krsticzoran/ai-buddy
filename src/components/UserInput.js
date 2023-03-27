import React, { useState } from "react";
import SendButton from "../SendButton";
import { InputGroup, FormControl } from "react-bootstrap";

const UserInput = (props) => {
  const [input, setInput] = useState("");

  const handleClick = () => {
    props.onData(input);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Type your message here"
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <SendButton onClick={handleClick}></SendButton>
    </InputGroup>
  );
};

export default UserInput;
