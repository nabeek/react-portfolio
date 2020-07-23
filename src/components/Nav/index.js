import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to={process.env.PUBLIC_URL + "/"}>
              <p className="has-text-weight-bold is-size-4">nabeek</p>
            </Link>
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <div className="tabs is-right">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/portfolio"}>
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/resume"}>Resume</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
