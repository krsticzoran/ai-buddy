import { useEffect } from "react";

const Microphone = (props) => {
  return (
    <button
      className="border-0 btn btn-outline-secondary"
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      onTouchStart={props.onTouchStart}
      onTouchEnd={props.onTouchEnd}
    >
      <i className="fas fa-microphone "></i>;
    </button>
  );
};
export default Microphone;
