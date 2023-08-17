import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="Navbar">
      <a href="/" className="nav-logo">
        Mosteiros Post
      </a>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <a className="navbar-text" href="/">
              Login
            </a>
          </li>
          <li>
            <a className="navbar-text" href="/">
              Register
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
