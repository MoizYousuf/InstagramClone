import React, { Component } from "react";
import Header from "../Components/ShareComponents/Header/header";
import Post from "../Components/ShareComponents/PeoplePost/post";
class DashBoard extends Component {
  render() {
    return (
      <div>
        <Header />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div>
            <div style={{marginTop: 60}}>
              <Post />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
