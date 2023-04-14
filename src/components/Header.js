import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <nav className="header">
      <img src={logo} alt="Zamazon" className="header__logo" />
    </nav>
  );
}

export default Header;
