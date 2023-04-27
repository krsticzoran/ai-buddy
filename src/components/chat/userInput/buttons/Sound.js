import { useState, useEffect } from "react";
import "./button.css";

const Sound = (props) => {
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    if (soundOn && props.answer.length) {
      const utterance = new SpeechSynthesisUtterance(props.answer);
      const voices = window.speechSynthesis.getVoices();
      utterance.voice = voices[0];
      utterance.pitch = 1;
      utterance.rate = 1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    }
  }, [props.answer]);

  const toggleSound = () => {
    soundOn ? setSoundOn(false) : setSoundOn(true);
    console.log(soundOn);
    if (soundOn) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <button
      answer={props.answer}
      onClick={toggleSound}
      className="border-0 btn button-color"
    >
      {soundOn ? (
        <i className="fa-solid fa-volume-high"></i>
      ) : (
        <i className="fa-solid fa-volume-off"></i>
      )}
    </button>
  );
};

export default Sound;