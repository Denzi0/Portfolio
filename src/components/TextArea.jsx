import React, { useState } from "react";

function TextArea({
  labelName,
  labelID,
  inputType,
  inputName,
  inputValue,
  onChange,
}) {
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
        onChange={onChange}
      />
    </div>
  );
}

export default TextArea;
