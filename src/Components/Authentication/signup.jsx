import React, { Component } from "react";
import "../style.css";
import Button from "../Elements/buttons";
import Input from "../Elements/input";

class OnlySignup extends Component {
  render() {
    return (
      <div className="card">
        <h1 className="instaLogo">Instagram</h1>

        <Input placeholder="Mobile Number or Email" />
        <Input placeholder="Password" type="password" />
        <Button
          link="/dashboard"
          name="Log in"
          color="white"
          backgroundcolor="#3897F0"
          large
          marginTop="15px"
        />
        <p className="subtitle" style={{ marginTop: 10, display: "flex" }}>
          ------------------OR-----------------
        </p>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: 14,
            color: "#385185",
            fontWeight: 600
          }}
        >
          <img
            src={require("../../assets/fb.png")}
            style={{ width: 16,marginTop: -3, marginLeft: -5}}
            alt="facebook logo"
          />{" "}
          Log in with Facebook
        </div>
        <p
          className="downText"
          style={{ color: "black", fontSize: 12, marginTop: 10 }}
        >
          Forgot password?
        </p>
      </div>
    );
  }
}

export default OnlySignup;
