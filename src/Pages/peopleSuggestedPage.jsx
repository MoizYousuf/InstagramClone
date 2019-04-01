import React, { Component } from "react";
import Header from "../Components/ShareComponents/Header/header";
import CardSlider from "../Components/cardSlider/cardSlider";
import Footer from "../Components/ShareComponents/Footer/footer";
import Button from "../Components/Elements/buttons";

const SuggestedPeople = [
  {
    username: "iarbazyousuf",
    name: "Arbaz Yousuf",
    suggest: "Friend on Facebook"
  },
  {
    username: "m.hashimirfan",
    name: "M.Hashim Irfan",
    suggest: "Friend on Facebook"
  },
  {
    username: "ali.amir491",
    name: "Ali Amir",
    suggest: "Friend on Facebook"
  },
  {
    username: "ifusionboys",
    name: "Fusion Boys",
    suggest: "Followed by iusmanyousuf + 1 more"
  },
  {
    username: "adeel.amin",
    name: "Adeel Amin",
    suggest: "Friend on Facebook"
  },
  {
    username: "rafay.jawad19",
    name: "Rafay Jawad",
    suggest: "Friend on Facebook"
  },
  {
    username: "owais_idrees",
    name: "owais Hashmi",
    suggest: "Friend on Facebook"
  },
  {
    username: "sariya_siddiqui",
    name: "Sariya Siddiqui",
    suggest: "New to Instagram"
  },
  {
    username: "areej7864",
    name: "Areej Mughal",
    suggest: "New to Instagram"
  },
  {
    username: "iarbazyousuf",
    name: "Arbaz Yousuf",
    suggest: "Friend on Facebook"
  }
];

class PeopleSuggestedPage extends Component {
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
        <div className="suggestedPageContainer">
          <div className="headingSuggested">
            <div style={{ fontSize: 16, color: "black", fontWeight: 600 }}>
              Suggested
            </div>
          </div>
        </div>
        <div
          className="FlexCenter"
          style={{ width: "100%", flexDirection: "column", marginTop: 10 }}
        >
          <div className="cardSuggested" style={{}}>
            {SuggestedPeople.map(value => {
              return (
                <div
                  style={{
                    display: "flex",
                    width: "95%",
                    // marginLeft: 20,
                    alignItems: "center",

                    marginTop: 10,
                    justifyContent: "space-between"
                  }}
                >
                  <div
                    style={{
                      marginLeft: 10,
                      textAlign: "left",
                      display: "flex"
                    }}
                  >
                    <div
                      style={{ marginTop: 5 }}
                      className="profilePicCircle1"
                    />
                    <div style={{ marginLeft: 10 }}>
                      <p
                        style={{ marginTop: 1, fontSize: 14, fontWeight: 600 }}
                      >
                        {value.username}
                      </p>
                      <p
                        style={{
                          color: "gray",
                          fontSize: 14,
                          marginTop: -18,
                          marginLeft: 1
                        }}
                      >
                        {value.name}
                      </p>
                      <p
                        style={{
                          color: "gray",
                          fontSize: 11,
                          marginTop: -15
                          // marginLeft: 1
                        }}
                      >
                        {value.suggest}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button
                      //   marginTop="10px"
                      color="white"
                      backgroundcolor="#3897F0"
                      width="65px"
                      name="Follow"
                      small
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PeopleSuggestedPage;
