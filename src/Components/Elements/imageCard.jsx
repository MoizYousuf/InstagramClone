import React, { Component } from "react";

class ImageCard extends Component {
  render() {
    return (
      <div
        style={{ width: "80%", marginTop: 10 }}
        className="FlexCenter flexDirectionRow flexWrap allImage"
      >
        <div className="imageCard1">
          <img
            src={require("../../assets/exam.jpg")}
            alt=""
            className="image"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="middle">
            <div
              className="FlexCenter"
              style={{ color: "white", fontSize: 16 }}
            >
              <i
                class="far fa-heart"
                style={{ color: "white", marginRight: 10 }}
              />{" "}
              101k
              <i
                class="fas fa-comment"
                style={{
                  color: "white",
                  marginRight: 10,
                  marginLeft: 10
                }}
              >
                {" "}
                937{" "}
              </i>
            </div>
          </div>
        </div>
        <div className="imageCard1">
          <img
            src={require("../../assets/exam.jpg")}
            alt=""
            className="image"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="middle">
            <div
              className="FlexCenter"
              style={{ color: "white", fontSize: 16 }}
            >
              <i
                class="far fa-heart"
                style={{ color: "white", marginRight: 10 }}
              />{" "}
              101k
              <i
                class="fas fa-comment"
                style={{
                  color: "white",
                  marginRight: 10,
                  marginLeft: 10
                }}
              >
                {" "}
                937{" "}
              </i>
            </div>
          </div>
        </div>
        <div className="imageCard1">
          <img
            src={require("../../assets/exam.jpg")}
            alt=""
            className="image"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="middle">
            <div
              className="FlexCenter"
              style={{ color: "white", fontSize: 16 }}
            >
              <i
                class="far fa-heart"
                style={{ color: "white", marginRight: 10 }}
              />{" "}
              101k
              <i
                class="fas fa-comment"
                style={{
                  color: "white",
                  marginRight: 10,
                  marginLeft: 10
                }}
              >
                {" "}
                937{" "}
              </i>
            </div>
          </div>
        </div>
        <div className="imageCard1">
          <img
            src={require("../../assets/exam.jpg")}
            alt=""
            className="image"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="middle">
            <div
              className="FlexCenter"
              style={{ color: "white", fontSize: 16 }}
            >
              <i
                class="far fa-heart"
                style={{ color: "white", marginRight: 10 }}
              />{" "}
              101k
              <i
                class="fas fa-comment"
                style={{
                  color: "white",
                  marginRight: 10,
                  marginLeft: 10
                }}
              >
                {" "}
                937{" "}
              </i>
            </div>
          </div>
        </div>
        <div className="imageCard1">
          <img
            src={require("../../assets/exam.jpg")}
            alt=""
            className="image"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="middle">
            <div
              className="FlexCenter"
              style={{ color: "white", fontSize: 16 }}
            >
              <i
                class="far fa-heart"
                style={{ color: "white", marginRight: 10 }}
              />{" "}
              101k
              <i
                class="fas fa-comment"
                style={{
                  color: "white",
                  marginRight: 10,
                  marginLeft: 10
                }}
              >
                {" "}
                937{" "}
              </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
