import React, { useState, useEffect } from "react";

const RecordingDots = (props) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => {
        return prevDots + ".";
      });
    }, 300);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (dots.length > 65) {
      props.handleOnMouseUp();
    }
  }, [dots]);

  return (
    <p className="border-0 btn btn-outline-secondary loading-dots">
      <span className="text-danger">{dots.substring(60)}</span>
      {dots.substring(0, 60)}
    </p>
  );
};

export default RecordingDots;
