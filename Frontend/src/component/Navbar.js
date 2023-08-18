import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="Navbar">
      <a href="/" className="nav-logo">
        Mosteiros Post
      </a>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link className="navbar-text" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="navbar-text" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
