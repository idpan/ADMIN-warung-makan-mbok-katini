import React, { useState } from "react";

function InputText({ required, id, className, onInputChange, isTextarea }) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
    onInputChange && onInputChange(event.target.value);
  };
  return (
    <>
      {isTextarea ? (
        <textarea
          required={required}
          cols="80"
          rows="10"
          id={id}
          value={input}
          onChange={handleChange}
          className={`textarea textarea-bordered rounded-none ${className}`}
        ></textarea>
      ) : (
        <input
          required={required}
          id={id}
          className={`input input-bordered w-full max-w-xs ${className}`}
          type="text"
          value={input}
          onChange={handleChange}
        />
      )}
    </>
  );
}

export default InputText;
