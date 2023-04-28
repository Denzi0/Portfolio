import React, { useState } from "react";

function TextArea({ labelName, labelID, inputType, inputName }) {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }
  return (
    <div className="form-control">
      <label id={labelID}>
        <small>{labelName}</small>
      </label>
      <textarea
        type={inputType}
        value={inputValue}
        name={inputName}
        id={labelID}
        onChange={handleInput}
      />
    </div>
  );
}

export default TextArea;
