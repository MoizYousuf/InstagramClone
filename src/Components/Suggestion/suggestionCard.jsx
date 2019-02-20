import React, { Component } from "react";
import ProfileSuggestion from "./profilePicWithName";

class SuggestionCard extends Component {
  render() {
    return (
      <div className="cardStorySize" style={{marginTop: 15}}>
        <div className="cardHeader">
          <p style={{ color: "gray", fontWeight: 600, fontSize: 14 }}>Suggestions For You</p>
          <p style={{ color: "black", fontSize: 12 }}>See All</p>
        </div>
          <div style={{width: "100%", overflow: "auto", overflowX: "hidden"}}>
              <ProfileSuggestion name="talhaismail" social="Friend on Facebook"/>
              <ProfileSuggestion name="yaseen.asif" social="Friend on Facebook"/>
              <ProfileSuggestion name="talhaismail" social="Friend on Facebook"/>
              <ProfileSuggestion name="yaseen.asif" social="Friend on Facebook"/>
          </div>
      </div>
    );
  }
}

export default SuggestionCard;
