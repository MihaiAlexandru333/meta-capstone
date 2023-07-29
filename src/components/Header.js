import React from "react";

import Nav from "./Nav";
import logo from "../assets/Logo.png";


function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="navigation">
          <Nav />
        </div>
      </div>
    </>
  );
}

export default Header;