import React from "react";
import { NavLink } from "react-router-dom";
import "./New.css";

class Header extends React.Component {
  render() {
    return (
      <div className="bg-smoke">
        <nav
          className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
          id="ftco-navbar"
        >
          <div className="container">
            <NavLink exact to="/">
            <img src="images/Final-50-U.png" alt="Clickable Image" />
              <img src="images/Final-50-Text.png" alt="Clickable Image" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="oi oi-menu"></span> Menu
            </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Services"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Services
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/Portfolio"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Career"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Career
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/Brochure"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Brochure
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/AboutUs"
                    className="nav-link"
                    activeClassName="active"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Contact"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
