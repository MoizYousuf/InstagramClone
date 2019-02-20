import React, { Component } from "react";

class ProfileStory extends Component {
  render() {
    return (
      <div style={{ display: "flex", width: "100%", marginLeft: 20 }}>
        <div className="profilePicCircle" />
        <div style={{ marginLeft: 10 }}>
          <p style={{ marginTop: 1, fontSize: 14, fontWeight: 600 }}>
            {this.props.name}
          </p>
          <p
            style={{
              color: "gray",
              fontSize: 10,
              marginTop: -20,
              marginLeft: 4
            }}
          >
            {this.props.time}
          </p>
        </div>
      </div>
    );
  }
}

export default ProfileStory;
