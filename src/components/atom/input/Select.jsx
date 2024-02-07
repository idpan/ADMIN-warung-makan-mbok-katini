import React, { useState } from "react";

function Select({ id, required, placeholder, options, onSelectChange }) {
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
    onSelectChange && onSelectChange(event.target.value);
  };

  return (
    <select
      id={id}
      required={required}
      className="select select-bordered w-full max-w-xs text-base "
      value={value}
      onChange={handleChange}
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => {
        return (
          <option key={"select-" + index} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
}

export default Select;

const handleChange = (event) => {
  setInput(event.target.value);
  onInputChange && onInputChange(event.target.value);
};
