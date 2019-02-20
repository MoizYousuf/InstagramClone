import React, { Component } from "react";
import ProfileStory from "./profilePicWithName";

class StoryCard extends Component {
  render() {
    return (
      <div className="cardStorySize">
        <div className="cardHeader">
          <p style={{ color: "gray", fontWeight: 600, fontSize: 14 }}>Stories</p>
          <p style={{ color: "black", fontSize: 12 }}>Watch All</p>
        </div>
          <div style={{width: "100%", overflow: "auto", overflowX: "hidden"}}>
              <ProfileStory name="talhaismail" time="2 HOURS AGO"/>
              <ProfileStory name="yaseen.asif" time="1 HOURS AGO"/>
              <ProfileStory name="talhaismail" time="2 HOURS AGO"/>
              <ProfileStory name="yaseen.asif" time="1 HOURS AGO"/>
          </div>
      </div>
    );
  }
}

export default StoryCard;
