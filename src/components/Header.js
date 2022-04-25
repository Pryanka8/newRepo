import React from "react";
const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>
        <span style={{ color: "#308d46" }}>React </span> Notes
      </h1>
      <button
        onClick={() => handleToggleDarkMode((peviousMode) => !previousMode)}
        className="save"
      >
        ToggleMode
      </button>
    </div>
  );
};
export default Header;
