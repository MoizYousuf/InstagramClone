import React, { Component } from "react";
import ImageAndSlider from "../Components/imageSlider/imageAndSlider";
import OnlyLogin from "../Components/Authentication/login";
import MobileStoreButton from "react-mobile-store-button";
import Footer from "../Components/ShareComponents/Footer/footer";
import OnlySignup from "../Components/Authentication/signup";

const playUrl =
  "https://play.google.com/store/apps/details?id=com.instagram.android&hl=en";

class LoginPage extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.login ? (
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "right"
            }}
          >
            <div style={{ marginTop: 100 }}>
              <ImageAndSlider />
            </div>
            <div style={{ marginLeft: 30, marginTop: 50 }}>
              <OnlyLogin />
              <div className="haveAnAccount">
                Have an account?{" "}
                <a
                  href="/signup"
                  style={{
                    textDecoration: "none",
                    color: "#3897F0",
                    cursor: "pointer"
                  }}
                >
                  Log in
                </a>
              </div>
              <div style={{ width: 350, textAlign: "center" }}>
                <p>Get the app.</p>
              </div>
              <div
                style={{
                  display: "flex",
                  width: 350,
                  justifyContent: "space-between"
                }}
              >
                <MobileStoreButton
                  store="android"
                  style={{ width: "45%", height: 45 }}
                    url={playUrl}
                  linkProps={{ title: "Android Store Button" }}
                />
                <MobileStoreButton
                  store="ios"
                  style={{ width: "45%", height: 45 }}
                  //   url={playUrl}
                  linkProps={{ title: "Apple Store Button" }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "right"
            }}
          >
            <div style={{ marginLeft: 30, marginTop: 50 }}>
              <OnlySignup />
              <div className="haveAnAccount">
                Don`t have an account?{" "}
                <a
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "#3897F0",
                    cursor: "pointer"
                  }}
                >
                  Sign up
                </a>
              </div>
              <div style={{ width: 350, textAlign: "center" }}>
                <p>Get the app.</p>
              </div>
              <div
                style={{
                  display: "flex",
                  width: 350,
                  justifyContent: "space-between"
                }}
              >
                <MobileStoreButton
                  store="android"
                  style={{ width: "45%", height: 45 }}
                    url={playUrl}
                  linkProps={{ title: "Android Store Button" }}
                />
                <MobileStoreButton
                  store="ios"
                  style={{ width: "45%", height: 45 }}
                  //   url={playUrl}
                  linkProps={{ title: "Apple Store Button" }}
                />
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default LoginPage;
