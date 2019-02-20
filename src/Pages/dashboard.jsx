import React, { Component } from "react";
import Header from "../Components/ShareComponents/Header/header";
import Post from "../Components/ShareComponents/PeoplePost/post";
import ProfileNamePic from "../Components/ShareComponents/PeoplePost/profileNamePic";
import StoryCard from "../Components/Elements/Stories/storyCard";
import SuggestionCard from "../Components/Suggestion/suggestionCard";
class DashBoard extends Component {
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
      <div>
        <Header />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center"
            // alignItems: "center"
          }}
        >
          <div>
            <div
              style={{
                marginTop: 140,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Post />
            </div>
          </div>
          <div
            className="StoryCardPlusSuggestion"
            style={{
              marginTop: 140,
              // Zindex: 0,
              // position: "fixed",
              // top: 20,
              // left: 999
            }}
          >
            <ProfileNamePic />
            <StoryCard />
            <SuggestionCard />
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
