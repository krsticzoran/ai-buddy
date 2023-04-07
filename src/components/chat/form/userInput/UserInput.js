import React, { useState, useEffect } from "react";
import FormContainer from "../formContainer/FormContainer";
import ButtonContainer from "../button/ButtonContainer";
import { FormControl } from "react-bootstrap";
import "./user-input.css";

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
    <FormContainer>
      <FormControl
        placeholder={isRecording ? "" : "Type your message here"}
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={
          props.isLoading ? "border-0 form-disabled" : "border-0 form-control"
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
    </FormContainer>
  );
};

export default UserInput;
