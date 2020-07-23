import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="hero-foot" id="footer">
      <div className="container has-text-centered">
        <div className="tabs is-centered">
          <ul>
            <li>
              <small>
                <span
                  id="nabeek-link"
                  onClick={() =>
                    window.open("https://github.com/nabeek", "_blank")
                  }
                >
                  nabeek made this
                </span>
                , copyright &copy; {new Date().getFullYear()}
              </small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
