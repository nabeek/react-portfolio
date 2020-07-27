import React from "react";

import "./style.css";
import { FaGithub, FaLink } from "react-icons/fa";

function Card({ img, name, description, repo, link }) {
  return (
    <div className="card is-3">
      <div className="card-image">
        <figure className="image">
          <img src={img} alt="Application screenshot" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <div className="content">{description}</div>
            <div className="has-text-centered">
              <button
                className="button is-link"
                onClick={() => window.open(repo, "_blank")}
              >
                <FaGithub />
              </button>
              <button
                className="button is-link"
                onClick={() => window.open(link, "_blank")}
              >
                <FaLink />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
