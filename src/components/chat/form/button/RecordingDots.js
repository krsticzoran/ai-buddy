import React, { useState, useEffect } from "react";
import "./button.css";

const RecordingDots = (props) => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => {
        return prevDots + ".";
      });
    }, 300);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (dots.length > 30) {
      console.log("olaa");
      props.handleOnMouseUp();
    }
  }, [dots]);

  return (
    <p className="border-0 btn btn-outline-secondary loading-dots">{dots}</p>
  );
};

export default RecordingDots;
