import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={About} />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/portfolio"}
            component={Portfolio}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/resume"}
            component={Resume}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
