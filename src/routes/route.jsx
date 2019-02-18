import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../container/login";
import Signup from "../container/signup";
import DashBoardCon from "../container/dashboard";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={DashBoardCon} />
        </div>
      </Router>
    );
  }
}

export default Routes;
