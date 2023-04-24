import { useEffect } from "react";
import "./button.css";

const Microphone = (props) => {
  return (
    <button
      className="border-0 btn button-color"
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      onTouchStart={props.onTouchStart}
      onTouchEnd={props.onTouchEnd}
    >
      <i className="fas fa-microphone "></i>
    </button>
  );
};
export default Microphone;
