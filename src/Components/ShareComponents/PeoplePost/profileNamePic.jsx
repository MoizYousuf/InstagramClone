import React, { Component } from "react";

class ProfileNamePic extends Component {
  render() {
    return (
      <div style={{display: "flex", marginLeft: 35, width: "100%", }}>
        <div className="profilePicCircle1" />
        <div style={{ marginLeft: 10 }}>
        <p style={{marginTop: 4}}>AbdulMoiz</p>
        <p style={{color: "gray", fontSize: 12, marginTop: -15 }}>MoizYousuf</p>
        </div>
      </div>
    );
  }
}

export default ProfileNamePic;
