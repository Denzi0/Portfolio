import React, { useState } from "react";

function Input({ labelID, inputType, children }) {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }
  return (
    <>
      <div className="form-control">
        <label id={labelID}>
          <small>{children}</small>
        </label>
        <input
          min="3"
          max="255"
          type={inputType}
          value={inputValue}
          id={labelID}
          onChange={handleInput}
          required
        />
      </div>
    </>
  );
}

export default Input;
