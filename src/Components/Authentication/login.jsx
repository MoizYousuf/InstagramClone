import React, { Component } from "react";
import "../style.css";
import Button from "../Elements/buttons";
import Input from "../Elements/input";

class OnlyLogin extends Component {
  render() {
    return (
      <div className="card">
        <h1 className="instaLogo">Instagram</h1>
        <p className="subtitle">
          Sign up to see photos and videos from your friends
        </p>
        <Button
          name="log in with Facebook"
          color="white"
          backgroundcolor="#3897F0"
          large
        />
        <p className="subtitle" style={{ marginTop: 10 }}>
          ------------------OR-----------------
        </p>
        <Input placeholder="Mobile Number or Email" />
        <Input placeholder="Full Name" />
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <Button
          name="Sign up"
          color="white"
          backgroundcolor="#3897F0"
          large
          marginTop="15px"
        />
        <div style={{width: "100%", textAlign: "center"}}>
          <p className="downText">
            By signing up, you agree to our<br /> <b>Terms</b>, <b>Data Policy</b> and{" "}
            <b>Cookies<br /> Policy .</b>
          </p>
        </div>
      </div>
    );
  }
}

export default OnlyLogin;
