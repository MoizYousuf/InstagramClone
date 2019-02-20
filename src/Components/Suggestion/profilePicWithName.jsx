import React, { Component } from "react";

class ProfileSuggestion extends Component {
  render() {
    return (
      <div style={{ display: "flex", width: "100%", marginLeft: 20 }}>
        <div className="profilePicCircle" />
        <div style={{ marginLeft: 10 }}>
          <p
            style={{
              marginTop: 1,
              fontSize: 14,
              marginLeft: -28,
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
    );
  }
}

export default ProfileSuggestion;
