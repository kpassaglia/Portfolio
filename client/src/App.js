import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
import NotFound from "./pages/404"
import "./App.css";

class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}  />
            <Route exact path="/about" component={About} />
            <Route exact path="/porfolio" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
