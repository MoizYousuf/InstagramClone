import React, { Component } from "react";
import "../../style.css";
import Comment from "./comment";
import { allSettled } from "rsvp";
import { Modal } from "react-bootstrap";
const image = require("../../.././assets/exam.jpg");
const save = require("../../.././assets/istagramLogo/save.png");
const save1 = require("../../.././assets/istagramLogo/save1.png");
const heart = require("../../.././assets/istagramLogo/heart.png");
const heart1 = require("../../.././assets/istagramLogo/heart1.png");
const share = require("../../.././assets/istagramLogo/share.png");
const comment = require("../../.././assets/istagramLogo/comment.png");
const dotMenu = require("../../.././assets/istagramLogo/3dot.png");

const allComment = [
  {
    name: "AbdulMoiz",
    comment: "hahahaha"
  },
  {
    name: "AbdulMoiz",
    comment: "kjkf"
  },
  {
    name: "AbdulMoiz",
    comment: "jkfkhwioruioweu"
  },
  {
    name: "AbdulMoiz",
    comment: "ye dosti"
  },
  {
    name: "AbdulMoiz",
    comment: "hum nhi "
  },
  {
    name: "AbdulMoiz",
    comment: "tory gy tory gy dum mgr"
  },
  {
    name: "AbdulMoiz",
    comment: "tera saaath na"
  },
  {
    name: "AbdulMoiz",
    comment: "chory gy"
  }
];

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeHeart: false,
      allComment: false,
      changeSave: false,
      smShow: false,
      mdShow: false
    };
  }

  render() {
    let smClose = () => this.setState({ smShow: false });
    let mdClose = () => this.setState({ mdShow: false });

    return (
      <div className="card1">
        <Modal
          size="md"
          show={this.state.smShow}
          onHide={smClose}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">Share</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: 50,
                alignItems: "center"
              }}
            >
              <i
                style={{ color: "#415993", fontSize: 30 }}
                class="fab fa-facebook-square"
              />
              <div className="shareTitle">Share to Facebook</div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: 50,
                alignItems: "center"
              }}
            >
              <i
                style={{ color: "#3F88F7", fontSize: 30 }}
                class="fab fa-facebook-messenger"
              />
              <div className="shareTitle">Share to Messenger</div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: 50,
                alignItems: "center"
              }}
            >
              <i
                style={{ color: "#1DA1F2", fontSize: 30 }}
                class="fab fa-twitter-square"
              />
              <div className="shareTitle">Share to Twitter</div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: 50,
                alignItems: "center"
              }}
            >
              <i
                style={{ color: "black", fontSize: 30 }}
                class="far fa-envelope"
              />
              <div className="shareTitle">Share via Email</div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: 50,
                alignItems: "center"
              }}
            >
              <i style={{ color: "black", fontSize: 30 }} class="far fa-copy" />
              <div className="shareTitle">Copy Link</div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          size="sm"
          show={this.state.mdShow}
          onHide={mdClose}
          // width="1000px"
          aria-labelledby="example-modal-sizes-title-sm"
        >
          {/* <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">Share</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <div
              style={{
                textAlign: "center",
                border: "1px solid transparent",
                borderBottomColor: "lightgray",
                color: "#ED4956",
                fontWeight: 700,
                fontSize: 14,
                width: "100%",
                height: 40
              }}
            >
              Report inappropiate
            </div>
            <div
              style={{
                textAlign: "center",
                border: "1px solid transparent",
                borderBottomColor: "lightgray",
                color: "#ED4956",
                fontWeight: 700,
                fontSize: 14,
                width: "100%",
                height: 55,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Unfollow
            </div>
            <div
              style={{
                textAlign: "center",
                border: "1px solid transparent",
                borderBottomColor: "lightgray",

                // fontWeight: 700,
                fontSize: 14,
                width: "100%",
                height: 55,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Go to post
            </div>
            <div
              style={{
                textAlign: "center",
                border: "1px solid transparent",
                borderBottomColor: "lightgray",

                // fontWeight: 700,
                fontSize: 14,
                width: "100%",
                height: 55,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Embed
            </div>
            <div
              style={{
                textAlign: "center",
                border: "1px solid transparent",
                borderBottomColor: "lightgray",

                // fontWeight: 700,
                fontSize: 14,
                width: "100%",
                height: 55,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Share
            </div>
            <div
              style={{
                textAlign: "center",
                border: "1px solid transparent",
                borderBottomColor: "lightgray",

                // fontWeight: 700,
                fontSize: 14,
                width: "100%",
                height: 55,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Copy Link
            </div>
            <div
              style={{
                textAlign: "center",
                border: "1px solid transparent",
                // borderBottomColor: "lightgray",

                // fontWeight: 700,
                fontSize: 14,
                width: "100%",
                height: 55,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}
              onClick={() => {
                this.setState({ mdShow: false });
              }}
            >
              Cancel
            </div>
          </Modal.Body>
        </Modal>
        <div
          style={{
            display: "flex",
            height: 60,
            marginLeft: 15,
            alignItems: "center"
          }}
        >
          <div className="profilePicCircle">
            <img
              src={require("../../../assets/exam.jpg")}
              style={{ width: "90%", height: "90%", borderRadius: 100 }}
              alt=""
            />
          </div>
          <div style={{ marginLeft: 10 }}>itxmoizyousuf</div>
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
            {this.state.changeHeart == false ? (
              <img
                src={heart}
                onClick={() =>
                  this.setState({ changeHeart: !this.state.changeHeart })
                }
                alt=""
                style={{ width: 25 }}
              />
            ) : (
              <img
                src={heart1}
                onClick={() =>
                  this.setState({ changeHeart: !this.state.changeHeart })
                }
                alt=""
                style={{ width: 25 }}
              />
            )}
            <a href="#commentInput">
              <img src={comment} alt="" style={{ width: 47 }} />
            </a>
            <img
              src={share}
              alt=""
              onClick={() => this.setState({ smShow: true })}
              style={{ width: 25, marginTop: -4 }}
            />
          </div>
          <div>
            {this.state.changeSave == false ? (
              <img
                src={save}
                onClick={() =>
                  this.setState({ changeSave: !this.state.changeSave })
                }
                alt=""
                style={{ width: 60 }}
              />
            ) : (
              <img
                src={save1}
                onClick={() =>
                  this.setState({ changeSave: !this.state.changeSave })
                }
                alt=""
                style={{ width: 60 }}
              />
            )}
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
        {this.state.allComment == true ? (
          ""
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              marginLeft: 15,
              fontWeight: 600,
              color: "gray",
              fontSize: 12,
              marginTop: 10,
              textDecoration: "none",
              cursor: "pointer"
            }}
          >
            <a onClick={() => this.setState({ allComment: true })}>
              View all 18 comments{" "}
            </a>
          </div>
        )}
        <div className="AllComment">
          {this.state.allComment == true ? (
            allComment.map((User, index) => {
              return (
                <Comment key={index} name={User.name} comment={User.comment} />
              );
            })
          ) : (
            <div>
              <Comment
                name={allComment[0].name}
                comment={allComment[0].comment}
              />
              <Comment
                name={allComment[1].name}
                comment={allComment[1].comment}
              />
            </div>
          )}
        </div>

        <div className="timeUpload">2 HOURS AGO</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          <div className="commentSendInput">
            <input
              id="commentInput"
              className="commentName"
              placeholder="Add a comment..."
              type="text"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                className="inputComment"
                src={dotMenu}
                onClick={() => this.setState({ mdShow: true })}
                alt=""
                style={{ width: 30, height: 30 }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
