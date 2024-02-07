import React from "react";

function DeleteMenuButton({ onDelete }) {
  return (
    <button
      type="button"
      className="btn btn-error rounded-md shadow-lg"
      onClick={onDelete}
    >
      Hapus
    </button>
  );
}

export default DeleteMenuButton;
