import React from 'react';
import LoadingDots from '../LoadingDots';
import '../button.css';

const SendButton = (props) => {
  return props.isLoading ? (
    <LoadingDots />
  ) : (
    <button onClick={props.onClick} className="border-0 btn button-color">
      <i className="fa fa-paper-plane "></i>
    </button>
  );
};

export default SendButton;
