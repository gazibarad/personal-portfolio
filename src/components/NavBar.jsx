import logo from "../assets/logo.svg";
import github from "../assets/github.svg";
import arrow from "../assets/arrow.svg";
import "./Navbar.css";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="wrap navbar-container">
      <a href="/">
        <img src={logo} alt="GD logo" />
      </a>

      <div className="navbar-container__links">
        <NavLink to="/" className="navLink">
          Home
        </NavLink>
        <NavLink className="navLink" to="/projects">
          Projects
        </NavLink>
        <NavLink className="navLink" to="/about">
          About
        </NavLink>
        <div className="navbar-container__links__contact-div">
          <div
            tabIndex="0"
            className="navbar-container__links__contact-div__container"
          >
            <img src={arrow} alt="dropdown arrow" />
            <span>Contact</span>
          </div>
          <div className="navbar-container__links__contact-div__dropdown-items">
            <a
              rel="noreferrer"
              target="_blank"
              href="mailto:gazibaradino@outlook.com"
              className="contact-btn"
            >
              EMAIL
            </a>
            <a
              className="github-btn"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/gazibarad"
            >
              <img src={github} alt="github logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
