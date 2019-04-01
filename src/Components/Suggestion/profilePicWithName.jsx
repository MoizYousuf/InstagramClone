import React, { Component } from "react";
import Button from "../Elements/buttons";

class ProfileSuggestion extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          marginLeft: 20,
          justifyContent: "space-between"
        }}
      >
        <div style={{ display: "flex" }}>
          <div className="profilePicCircle" />
          <div style={{ marginLeft: 10 }}>
            <p
              style={{
                marginTop: 1,
                fontSize: 14,
                marginLeft: this.props.marginLeft || -28,
                fontWeight: 600
              }}
            >
              {this.props.name}
            </p>
            <p
              style={{
                color: "gray",
                fontSize: 11,
                marginTop: -18,
                marginLeft: 2
              }}
            >
              {this.props.social}
            </p>
          </div>
        </div>
        {this.props.button ? (
          <Button
            // marginTop="10px"
            color="white"
            backgroundcolor="#3897F0"
            // width="65px"
            marginRight="25px"
            name="Follow"
            small
          />
        ) : (
          <div className="followButton">Follow</div>
        )}
      </div>
    );
  }
}

export default ProfileSuggestion;
