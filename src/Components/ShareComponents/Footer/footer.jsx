import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
      <div className="footerParent">
      <div className="allLinks">
        <a className="a" href="">
          ABOUT US
        </a>
        <a className="a" href="">
          SUPPORT
        </a>
        <a className="a" href="">
          PRESS
        </a>
        <a className="a" href="">
          API
        </a>
        <a className="a" href="">
          JOBS
        </a>
        <a className="a" href="">
          PRIVACY
        </a>
        <br />
        <a className="a" href="">
          TERMS
        </a>
        <a className="a" href="">
          DIRECTORY
        </a>
        <a className="a" href="">
          PROFILES
        </a>
        <a className="a" href="">
          HASHTAGS
        </a>
        <a className="a" href="">
          LANGUAGE
        </a>
        </div>
        <div style={{color: "gray"}}>
        &copy; 2019 INSTAGRAM
        </div>
        </div>
      </div>
    );
  }
}

export default Footer;
