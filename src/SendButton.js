import React from "react";
import { Button } from "react-bootstrap";

const SendButton = (props) => {
  return (
    <Button variant="primary" onClick={props.onClick}>
      Send
    </Button>
  );
};

export default SendButton;
