import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditMenuButton({ id, children }) {
  const location = useLocation();
  const navigate = useNavigate();

  function previousMenuPath(location) {
    const path = location.pathname;
    const split = path.split("/");
    const previousPath = `/${split[1]}/${split[2]}`;

    return previousPath;
  }

  function handleClick() {
    navigate(`${previousMenuPath(location)}/edit/${id}`);
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className="btn btn-success rounded-0"
    >
      {children}
    </button>
  );
}

export default EditMenuButton;
