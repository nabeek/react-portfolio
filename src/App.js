import React from "react";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="hero is-fullheight is-default is-bold">
        <Nav />
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
        </HashRouter>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
