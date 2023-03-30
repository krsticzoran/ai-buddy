import React, { useState, useEffect } from "react";

const LoadingDots = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length >= 3) {
          return ".";
        } else {
          return prevDots + ".";
        }
      });
    }, 300);
    return () => clearInterval(intervalId);
  }, []);

  return <p className="border-0 btn btn-outline-secondary">{dots}</p>;
};

export default LoadingDots;
