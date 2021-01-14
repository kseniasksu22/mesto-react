import logoImg from "../images/Vector.svg";
import React from "react";

function Header() {
  return (
    <header className="header">
      <img className="header__icon" src={logoImg} alt="Место" />
    </header>
  );
}

export default Header;
