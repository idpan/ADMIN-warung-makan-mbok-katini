import React from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle } from "react-bootstrap-icons";

/**
 * AddMenuButton component renders a button to add a new menu item.
 *
 * @param {string} groupPath - Represents the path of the menu group.
 */
function AddMenuButton({ groupPath }) {
  // Use the useNavigate hook from react-router-dom to get navigation functionality
  const navigate = useNavigate();

  /**
   * Handles click event on the button.
   * Navigates to the add menu item page for the specified groupPath.
   *
   * @param {string} groupPath - Path of the menu group.
   */
  function handleClick(groupPath) {
    navigate(`/menu/${groupPath}/add`);
  }

  // Render the button element with an onClick event handler
  // When clicked, it calls handleClick function with the groupPath
  // Renders the "Tambah Menu" text along with a PlusCircle icon
  return (
    <button
      type="button"
      onClick={() => {
        handleClick(groupPath);
      }}
      className="btn btn-primary rounded-md shadow-lg"
    >
      Tambah Menu <PlusCircle />
    </button>
  );
}

export default AddMenuButton;
