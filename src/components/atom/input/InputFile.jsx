import React, { useState } from "react";

function InputFile({ name, id, onInputChange }) {
  const handleChange = (event) => {
    onInputChange && onInputChange(event.target.files[0]);
  };
  return (
    <>
      <input
        required
        id={id}
        type="file"
        name={name}
        onChange={handleChange}
        className="file-input file-input-bordered w-full max-w-xs"
      />
    </>
  );
}

export default InputFile;
