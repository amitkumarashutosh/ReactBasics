import React from "react";
import "./Header.css";
import Logo from "../../images/Logo.png";

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} className="header__image" />
      <h1 className="header__heading">Videos Todos</h1>
    </div>
  );
}
