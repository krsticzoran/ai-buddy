import React, { useState, useEffect } from 'react';
import './button.css';
import RecordingDots from './recordingDots/RecordingDots';
import { useSpeechRecognition } from 'react-speech-kit';

import SendButton from './sendButton/SendButton';
import Microphone from './microphone/Microphone';
import { MemoizedSound } from './Sound';

const ButtonContainer = (props) => {
  const [value, setValue] = useState('');
  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  const clickHandler = () => {
    if (!props.isRecording) {
      props.recordingStart();
    } else {
      props.recordingStop();
    }
  };

  useEffect(() => {
    if (props.isRecording) {
      listen();
    }
    if (!props.isRecording && value !== '') {
      props.handleVoiceInput(value);
      stop();
      setValue('');
    }
  }, [props.isRecording]);

  return (
    <div className=" position-absolute top-50 end-0 translate-middle-y button-container px-3">
      {!props.isRecording && (
        <SendButton isLoading={props.isLoading} onClick={props.onClick} />
      )}

      {props.isRecording && (
        <RecordingDots recordingStop={props.recordingStop} />
      )}

      {props.input === '' && (
        <Microphone
          onClick={clickHandler}
          recordingStart={props.recordingStart}
          recordingStop={props.recordingStop}
          isRecording={props.isRecording}
          handleVoiceInput={props.handleVoiceInput}
        />
      )}
      <MemoizedSound answer={props.answer} />
    </div>
  );
};

export default ButtonContainer;
