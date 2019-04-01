import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../container/login";
import Signup from "../container/signup";
import DashBoardCon from "../container/dashboard";
import Explore from "../container/explore";
import PeopleSuggested from "../container/peopleSuggested";
import Profile from "../container/profile";
import Setting from "../container/setting";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={DashBoardCon} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/accounts/edit" component={Setting} />
          <Route path="/explore/people/suggested" component={PeopleSuggested} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default Routes;
