import React from "react";

function SubmitButton({ children }) {
  return (
    <button type="submit" className="btn btn-success  text-slate-50 mt-3">
      {children}
    </button>
  );
}

export default SubmitButton;
