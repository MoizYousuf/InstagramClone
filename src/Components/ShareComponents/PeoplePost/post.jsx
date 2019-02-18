import React, { Component } from "react";
import "../../style.css";
const image = require("../../.././assets/exam.jpg");
const save = require("../../.././assets/istagramLogo/save.png");
const heart = require("../../.././assets/istagramLogo/heart.png");
const share = require("../../.././assets/istagramLogo/share.png");
const comment = require("../../.././assets/istagramLogo/comment.png");
class Post extends Component {
  render() {
    return (
      <div className="card1">
        <div
          style={{
            display: "flex",
            height: 50,
            marginLeft: 15,
            alignItems: "center"
          }}
        >
          <div className="profilePicCircle" />
          <div style={{ marginLeft: 10 }}>username</div>
        </div>
        <div>
          <img className="postImage" src={image} alt="" />
        </div>
        <div className="expression">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 60,
              marginLeft: 15
            }}
          >
            <img src={heart} alt="" style={{ width: 25 }} />
            <img src={comment} alt="" style={{ width: 40 }} />
            <img src={share} alt="" style={{ width: 25, marginTop: -4 }} />
          </div>
          <div>
            <img src={save} alt="" style={{ width: 60 }} />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            marginLeft: 15,
            fontWeight: 600
          }}
        >
          <span>6,173 </span>
          <span> &nbsp; likes </span>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            marginLeft: 15,
            fontWeight: 600,
            color: "gray",
            fontSize: 12,
            marginTop: 10
          }}
        >
          <span>View all 18 comments </span>
        </div>
        <div className="AllComment">
          <div className="comments">
            <div style={{ width: "80%", textAlign: "left" }}>
              <span className="name">abdulmoiz</span>
              <span style={{ marginLeft: 8 }}>hahah this is message</span>
            </div>
            <div style={{ width: 40 }}>
              <img style={{ width: 12 }} src={heart} alt="" />
            </div>
          </div>
          <div className="comments">
            <div style={{ width: "80%", textAlign: "left" }}>
              <span className="name">abdulmoiz</span>
              <span style={{ marginLeft: 8 }}>hahah this is message</span>
            </div>
            <div style={{ width: 40 }}>
              <img style={{ width: 12 }} src={heart} alt="" />
            </div>
          </div>
        </div>
        <div className="timeUpload">2 HOURS AGO</div>
      </div>
    );
  }
}

export default Post;
