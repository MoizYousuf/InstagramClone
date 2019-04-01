import React, { Component } from "react";
import Header from "../Components/ShareComponents/Header/header";
import CardSlider from "../Components/cardSlider/cardSlider";
import Footer from "../Components/ShareComponents/Footer/footer";

class ExplorePage extends Component {
  scrollFunction = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("header").style.maxHeight = "50px";
      document.getElementById("header").style.transition =
        "max-height 0.25s ease-out;";
      document.getElementById("line").style.display = "none";
      document.getElementById("text").style.display = "none";
    } else {
      document.getElementById("header").style.maxHeight = "80px";
      document.getElementById("header").style.transition =
        "max-height 0.25s ease-in";
      document.getElementById("line").style.display = "block";
      document.getElementById("text").style.display = "block";
    }
  };
  render() {
    window.onscroll = () => {
      this.scrollFunction();
    };
    return (
      <div style={{ background: "#FAFAFA", height: "100%" }}>
        <Header />
        <div className="explorePageContainer">
          <div className="headingExplore">
            <div style={{ fontSize: 14, color: "gray", fontWeight: 600 }}>
              Discover People
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                color: "#4497F0"
              }}
              onClick={() => (window.location = "/explore/people/suggested/")}
            >
              See All
            </div>
          </div>
        </div>
        <div className="FlexCenter" style={{ marginTop: 20 }}>
          <div
            className="fontSize14 fontWeigth6 marginTop10 textAlignLeft FlexCenter suggestionText"
            style={{ width: "65%", justifyContent: "space-between" }}
          >
            <div>Suggestions For You</div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                color: "#4497F0"
              }}
              onClick={() => (window.location = "/explore/people/suggested/")}
            >
              See All
            </div>
          </div>
        </div>
        <div
          style={{
            display: "Flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: 15
          }}
        >
          <div className="cardSlider" style={{ width: "75%" }}>
            <CardSlider />
          </div>
        </div>
        <div className="FlexCenter exploreHeading">
          <div
            className=" FontSize13 gray fontWeigth6 textAlignLeft exploreHeading"
            style={{ width: "65%", marginTop: 70 }}
          >
            Explore
          </div>
        </div>
        <div className="FlexCenter">
          <div
            style={{ width: "65%", marginTop: 10 }}
            className="FlexCenter flexDirectionRow flexWrap allImage"
          >
            <div className="imageCard">
              <img
                src={require("../assets/exam.jpg")}
                alt=""
                className="image widthPer100 heightPer100"
                // style={{ width: "100%", height: "100%" }}
              />
              <div className="middle">
                <div
                  className="FlexCenter  white fontSize16"
                  // style={{ color: "white", fontSize: 16 }}
                >
                  <i
                    class="far fa-heart  white marginRight10"
                    // style={{ color: "white", marginRight: 10 }}
                  />{" "}
                  101k
                  <i
                    className=" fas fa-comment white marginRight10 marginLeft10"
                    // style={{ color: "white", marginRight: 10, marginLeft: 10 }}
                  >
                    {" "}
                    937{" "}
                  </i>
                </div>
              </div>
            </div>
            <div className="imageCard">
              <img
                src={require("../assets/exam.jpg")}
                alt=""
                className="image widthPer100 heightPer100"
                // style={{ width: "100%", height: "100%" }}
              />
              <div className="middle">
                <div
                  className="FlexCenter white fontSize16"
                  // style={{ color: "white", fontSize: 16 }}
                >
                  <i
                    className="far fa-heart white marginRight10"
                    style={{ color: "white", marginRight: 10 }}
                  />{" "}
                  101k
                  <i
                    className="fas fa-comment white marginRight10 marginLeft10"
                    // style={{ color: "white", marginRight: 10, marginLeft: 10 }}
                  >
                    {" "}
                    937{" "}
                  </i>
                </div>
              </div>
            </div>
            <div className="imageCard">
              <img
                src={require("../assets/exam.jpg")}
                alt=""
                className="image widthPer100 heightPer100"
                // style={{ width: "100%", height: "100%" }}
              />
              <div className="middle">
                <div
                  className="FlexCenter white fontSize16"
                  // style={{ color: "white", fontSize: 16 }}
                >
                  <i
                    className="far fa-heart  white marginRight10 "
                    // style={{ color: "white", marginRight: 10 }}
                  />{" "}
                  101k
                  <i
                    class="fas fa-comment  white marginRight10 marginLeft10"
                    // style={{ color: "white", marginRight: 10, marginLeft: 10 }}
                  >
                    {" "}
                    937{" "}
                  </i>
                </div>
              </div>
            </div>
            <div className="imageCard">
              <img
                src={require("../assets/exam.jpg")}
                alt=""
                className="image widthPer100 heightPer100"
                // style={{ width: "100%", height: "100%" }}
              />
              <div className="middle">
                <div
                  className="FlexCenter white fontSize16"
                  style={{ color: "white", fontSize: 16 }}
                >
                  <i
                    className="far fa-heart white marginRight10"
                    // style={{ color: "white", marginRight: 10 }}
                  />{" "}
                  101k
                  <i
                    className="fas fa-comment white marginRight10 marginLeft10"
                    // style={{ color: "white", marginRight: 10, marginLeft: 10 }}
                  >
                    {" "}
                    937{" "}
                  </i>
                </div>
              </div>
            </div>
            <div className="imageCard">
              <img
                src={require("../assets/exam.jpg")}
                alt=""
                className="image widthPer100 heightPer100"
                // style={{ width: "100%", height: "100%" }}
              />
              <div className="middle">
                <div
                  className="FlexCenter white fontSize16"
                  style={{ color: "white", fontSize: 16 }}
                >
                  <i
                    className="far fa-heart white marginRight10"
                    // style={{ color: "white", marginRight: 10 }}
                  />{" "}
                  101k
                  <i
                    className="fas fa-comment white marginRight10 marginLeft10"
                    // style={{ color: "white", marginRight: 10, marginLeft: 10 }}
                  >
                    {" "}
                    937{" "}
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ExplorePage;
