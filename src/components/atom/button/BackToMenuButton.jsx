import React from "react";
import { ArrowLeft, ArrowLeftCircle } from "react-bootstrap-icons";
import { useLocation, useNavigate } from "react-router-dom";

function BackToMenuButton() {
  const location = useLocation();
  const navigate = useNavigate();

  function previousMenuPath(location) {
    const path = location.pathname;
    const split = path.split("/");
    const previousPath = `/${split[1]}/${split[2]}`;

    return previousPath;
  }

  function handleClick() {
    navigate(previousMenuPath(location));
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="btn btn-neutral rounded-md shadow-lg"
    >
      <ArrowLeft /> Kembali
    </button>
  );
}

export default BackToMenuButton;
