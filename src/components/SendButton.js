import React from "react";
import LoadingDots from "./LoadingDots";

const SendButton = (props) => {
  return props.isLoading ? (
    <LoadingDots />
  ) : (
    <button className="border-0 btn btn-outline-secondary">
      <i className="fa fa-paper-plane "></i>
    </button>
  );
};

export default SendButton;
