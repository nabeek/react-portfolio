import React from "react";

import Card from "../components/Card";
import PortfolioItems from "../utils/portfolioItems.json";

import {} from "react-icons/fa";

function About() {
  return (
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          {PortfolioItems.map(app => (
            <Card
              key={app.id}
              img={app.img}
              name={app.name}
              description={app.description}
              repo={app.repo}
              link={app.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
