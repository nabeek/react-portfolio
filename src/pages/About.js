import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns is-vcentered">
          <div className="column is-5">
            <figure className="">
              <img
                className="homepage-image"
                src="https://avatars2.githubusercontent.com/u/4752937?s=460&u=f6bb01c98727e7678a1c92f8f95935286a04502e&v=4"
                alt="Happy 3rd"
              />
            </figure>
          </div>
          <div className="column is-6 is-offset-1">
            <h1 className="title homepage-name" id="homepage-name">
              Nick Beekhuizen
            </h1>
            <h2 className="subtitle" id="homepage-email">
              nabeek [at] gmail
            </h2>
            <div className="icon has-text-centered">
              <a href="https://github.com/nabeek" target="_blank">
                <FaGithub className="homepage-icon" />
              </a>
              <a href="https://www.linkedin.com/in/nabeek" target="_blank">
                <FaLinkedin className="homepage-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
