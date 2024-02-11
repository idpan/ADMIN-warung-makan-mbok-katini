import React from "react";

function SubmitButton({ disabled, children }) {
  return (
    <button
      disabled={disabled}
      type="submit"
      className="btn btn-success  text-slate-50 mt-3"
    >
      {children}
    </button>
  );
}

export default SubmitButton;
