import React, { useState } from "react";
import SendButton from "./SendButton";
import { InputGroup, FormControl } from "react-bootstrap";

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
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Type your message here"
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <SendButton onClick={handleClick}></SendButton>
    </InputGroup>
  );
};

export default UserInput;
