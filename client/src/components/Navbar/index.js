import React from "react";
import "./style.css";

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <img src="https://i.ibb.co/bsGcJRH/logo-symbol.png" alt="Helpful Human logo" border="0" ></img>
      {children}
    </nav>
  );
}

export default Navbar;
