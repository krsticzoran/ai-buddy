import { useState, useEffect } from "react";
import "./button.css";
import RecordingDots from "./RecordingDots";

import SendButton from "./SendButton";
import Microphone from "./Microphone";

const ButtonContainer = (props) => {
  const [isRecording, setIsRecording] = useState(false);
  const handleOnMouseDown = () => {
    setIsRecording(true);
  };
  const handleOnMouseUp = () => {
    setIsRecording(false);
  };

  return (
    <div className=" position-absolute top-50 end-0 translate-middle-y button-container">
      {!isRecording && (
        <SendButton
          isLoading={props.isLoading}
          onClick={props.handleClick}
        ></SendButton>
      )}

      {isRecording && <RecordingDots handleOnMouseUp={handleOnMouseUp} />}

      {props.input == "" && (
        <Microphone
          onMouseDown={handleOnMouseDown}
          onMouseUp={handleOnMouseUp}
          onTouchStart={handleOnMouseDown}
          onTouchEnd={handleOnMouseUp}
        />
      )}
    </div>
  );
};

export default ButtonContainer;
