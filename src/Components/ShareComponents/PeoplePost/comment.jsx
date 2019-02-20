import React, { Component } from "react";
const heart = require("../../.././assets/istagramLogo/heart.png");
const heart1 = require("../../.././assets/istagramLogo/heart1.png");

class Comment extends Component {
  render() {
    return (
      <div className="comments">
        <div style={{ width: "80%", textAlign: "left" }}>
          <span className="name">{this.props.name}</span>
          <span style={{ marginLeft: 8 }}>{this.props.comment}</span>
        </div>
        <div style={{ width: 40 }}>
          <img style={{ width: 12 }} src={heart} alt="" />
        </div>
      </div>
    );
  }
}

export default Comment;
