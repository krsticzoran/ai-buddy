import React, { useState } from "react";

const UserInputs = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return <input type="text" value={inputValue} onChange={handleInputChange} />;
};

export default UserInputs;
