import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul>
        <li>
          <a to="/" className="a">
            Home
          </a>
        </li>
        <li>
          <a to="/" className="a">
            About
          </a>
        </li>
        <li>
          <a to="/" className="a">
            Menu
          </a>
        </li>
        <li>
          <a to="/reservations" className="a">
            Reservations
          </a>
        </li>
        <li>
          <a to="/" className="a">
            Order Online
          </a>
        </li>
        <li>
          <a to="/" className="a">
            Login
          </a>
        </li>
      </ul>
    </>
  );
}

export default Nav;