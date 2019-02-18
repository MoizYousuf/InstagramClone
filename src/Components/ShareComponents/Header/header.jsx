import React, { Component } from "react";
import Input from "../../Elements/input"
import "../../style.css";
const compass = require("../../../assets/istagramLogo/compass.png");
const heart = require("../../../assets/istagramLogo/heart.png");
const profile = require("../../../assets/istagramLogo/profile.png");

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <div className="HeaderLogo">
            <p>
              <img
                className="logo"
                src={require("../../../assets/istagramLogo/instagram_logo.png")}
                alt=""
              />
            </p>
            <p style={{ fontSize: 28, marginBottom: 25 }}>|</p>{" "}
            <p className="text">Instagram</p>
          </div>
          <div className="searchBar">
                <Input placeholder="Search" height="30px" width="230px"/>
          </div>
          <div className="linksIcon">
                <img style={{width: 30}} src={compass} alt=""/>
                <img style={{width: 30}} src={heart} alt=""/>
                <img style={{width: 30}} src={profile} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;