import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "components/Logo/Logo";
import "./Header.scss"
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <Logo />
    </header>
  )
}

export default Header
