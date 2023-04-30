import React, { useState } from "react";

function Input({
  labelID,
  inputType,
  inputName,
  inputValue,
  children,
  onChange,
}) {
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
          name={inputName}
          id={labelID}
          onChange={onChange}
          required
        />
      </div>
    </>
  );
}

export default Input;
