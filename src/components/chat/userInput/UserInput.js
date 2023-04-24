import React, { useState, useEffect } from "react";
import "./user-input.css";

import { FormControl } from "react-bootstrap";

import UserInputContainer from "./UserInputContainer/UserInputContainer";
import ButtonContainer from "./buttons/ButtonContainer";

const UserInput = (props) => {
  const [input, setInput] = useState("");
  const [voice, setVoice] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const handleOnMouseDown = () => {
    setIsRecording(true);
  };
  const handleOnMouseUp = () => {
    setIsRecording(false);
  };

  const handleClick = () => {
    props.onData(input);
    setInput("");
  };

  const handleVoiceInput = (value) => {
    setVoice(value);
  };

  useEffect(() => {
    if (voice.length) {
      console.log(voice);
      props.onData(voice);
      setVoice("");
    }
  }, [voice]);

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
    <UserInputContainer>
      <FormControl
        placeholder={isRecording ? "" : "Type your message here"}
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={
          props.isLoading
            ? "border-0 form-disabled py-3 "
            : "border-0 form-control py-3 "
        }
        disabled={props.isLoading}
      />
      <ButtonContainer
        isLoading={props.isLoading}
        onClick={handleClick}
        input={input}
        isRecording={isRecording}
        onMouseDown={handleOnMouseDown}
        onMouseUp={handleOnMouseUp}
        onTouchStart={handleOnMouseDown}
        onTouchEnd={handleOnMouseUp}
        handleVoiceInput={handleVoiceInput}
        answer={props.answer}
      ></ButtonContainer>
    </UserInputContainer>
  );
};

export default UserInput;
