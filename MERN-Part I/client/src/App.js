import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/saved" component={Saved} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
