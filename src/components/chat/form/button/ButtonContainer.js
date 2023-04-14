import { useState, useEffect } from "react";
import "./button.css";
import RecordingDots from "./RecordingDots";
import { useSpeechRecognition } from "react-speech-kit";

import SendButton from "./SendButton";
import Microphone from "./Microphone";
import Sound from "./Sound";

const ButtonContainer = (props) => {
  const [value, setValue] = useState("");
  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  useEffect(() => {
    let timeoutId = null;
    if (props.isRecording) {
      listen();
    }
    if (!props.isRecording && value !== "") {
      timeoutId = setTimeout(() => {
        props.handleVoiceInput(value);
        stop();
        setValue("");
      }, 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [props.isRecording]);

  return (
    <div className=" position-absolute top-50 end-0 translate-middle-y button-container px-3">
      {!props.isRecording && (
        <SendButton isLoading={props.isLoading} onClick={props.onClick} />
      )}

      {props.isRecording && <RecordingDots handleOnMouseUp={props.onMouseUp} />}

      {props.input === "" && (
        <Microphone
          onMouseDown={props.onMouseDown}
          onMouseUp={props.onMouseUp}
          onTouchStart={props.onMouseDown}
          onTouchEnd={props.onMouseUp}
          isRecording={props.isRecording}
          handleVoiceInput={props.handleVoiceInput}
        />
      )}
      <Sound answer={props.answer}></Sound>
    </div>
  );
};

export default ButtonContainer;
