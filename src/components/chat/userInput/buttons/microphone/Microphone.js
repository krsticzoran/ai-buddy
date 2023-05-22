import React from 'react';
import './../button.css';

const Microphone = (props) => {
  return (
    <button onClick={props.onClick} className="border-0 btn button-color">
      <i className="fas fa-microphone "></i>
    </button>
  );
};
export default Microphone;
