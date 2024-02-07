import React from "react";

function ContainerInput({ children, id, label }) {
  return (
    <div className="mb-4">
      <div className="mb-2">
        <label htmlFor={id}>{label}</label>
      </div>
      {children}
    </div>
  );
}

export default ContainerInput;
