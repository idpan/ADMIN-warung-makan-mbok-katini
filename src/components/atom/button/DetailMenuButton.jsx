import React from "react";
import { useNavigate } from "react-router-dom";

function DetailMenuButton({ id }) {
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`detail/${id}`);
  }
  return (
    <button
      type="button"
      onClick={() => {
        handleClick(id);
      }}
      className="btn btn-info rounded-md shadow-lg"
    >
      Detail
    </button>
  );
}

export default DetailMenuButton;
