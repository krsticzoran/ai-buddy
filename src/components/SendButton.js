import React from "react";

const SendButton = (props) => {
  return (
    <button className="border-0" onClick={props.onClick}>
      <i className="fa fa-paper-plane "></i>
    </button>
  );
};

export default SendButton;
