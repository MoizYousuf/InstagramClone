import React, { Component } from "react";
import Input from "../../Elements/input";
import "../../style.css";
import { Popover, OverlayTrigger } from "react-bootstrap";
import Button from "../../Elements/buttons";
import SpinnerPage from "../../Elements/spinner";
import { Modal } from "react-bootstrap";

const compass = require("../../../assets/istagramLogo/compass.png");
const heart = require("../../../assets/istagramLogo/heart.png");
const profile = require("../../../assets/istagramLogo/profile.png");

const NotificationData = [
  {
    id: 1,
    userPic:
      "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/46520324_1071585756382137_4125096048043491328_n.jpg?_nc_cat=110&_nc_ht=scontent.fkhi1-1.fna&oh=d84235f97ed48d944cb1ddd8d358a80a&oe=5CE199CE",
    username: "AbdulMoiz",
    whatDo: "liked your photo.",
    days: "3d",
    img: "../../../assets/exam.jpg"
  },
  {
    id: 2,
    userPic:
      "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-1/p160x160/48419588_2227986634112699_5058837142378119168_n.jpg?_nc_cat=107&_nc_ht=scontent.fkhi1-1.fna&oh=d3054e2b2405cbfd0f7fb324e10b4007&oe=5D288BA5",
    username: "Arbaz Yousuf",
    whatDo: "liked your photo.",
    days: "3d",
    img: "../../../assets/exam.jpg"
  },
  {
    id: 3,
    userPic:
      "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/49864273_397935250973388_2161499990302654464_n.jpg?_nc_cat=101&_nc_ht=scontent.fkhi1-1.fna&oh=1c884d63d3057be23688efcfe49b2f0f&oe=5D1DA8EA",
    username: "Usman Yousuf",
    whatDo: "liked your photo.",
    days: "3d",
    img: "../../../assets/exam.jpg"
  },
  {
    id: 4,
    userPic: "../../../assets/exam.jpg",
    username: "Shahan",
    whatDo: "Your Facebook friend Shahan is on Instagram as",
    days: "6W",
    button: true,
    followed: true
  },
  {
    id: 5,
    userPic: "../../../assets/exam.jpg",
    username: "Umer",
    whatDo: "Started Following You.",
    days: "8W",
    following: true
  }
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      following: false,
      name: "",
      showSpinner: "",
      smShow: false
    };
  }
  spinner = () => {
    this.setState({
      showSpinner: true,
      smShow: false
    });
    setTimeout(() => {
      this.setState({
        following: !this.state.following,
        showSpinner: false
      });
    }, 2000);
  };

  render() {
    let smClose = () => this.setState({ smShow: false });

    const popover = (
      <Popover id="popover-basic" className="popUpNotification">
        <div className="allNotifications">
          {NotificationData.map((value, index) => {
            if (value.img) {
              return (
                <div key={index} className="notification">
                  <div
                    style={{
                      display: "flex",
                      // justifyContent: "center",
                      alignItems: "center",
                      width: "80%"
                    }}
                  >
                    <div className="profilePicCircle">
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 100
                        }}
                        src={value.userPic}
                        alt=""
                      />
                    </div>
                    <div className="NotificationPersonName">
                      {value.username}
                    </div>
                    <div style={{ marginLeft: 5 }}>{value.whatDo}</div>
                    <div style={{ color: "gray" }}>{value.days}</div>
                  </div>
                  <div>
                    <img
                      style={{ width: 35 }}
                      src={require("../../../assets/exam.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              );
            } else if (value.button) {
              return (
                <div className="notification">
                  <div
                    style={{
                      display: "flex",
                      // justifyContent: "center",
                      alignItems: "center",
                      width: "80%"
                    }}
                  >
                    <div className="profilePicCircle" style={{ width: 50 }}>
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 100
                        }}
                        src={require("../../../assets/exam.jpg")}
                        alt=""
                      />
                    </div>
                    <div className="NotificationPersonName">
                      <div style={{ fontWeight: 400 }}>
                        {value.whatDo}
                        <b style={{ fontWeight: 600, color: "black" }}>
                          {" "}
                          {value.username}{" "}
                        </b>
                        <b style={{ color: "gray" }}>{value.days}</b>
                      </div>
                      {/* <div style={{ color: "gray", marginLeft: 10 }}>6w</div> */}
                    </div>
                  </div>
                  <div>
                    {this.state.following ? (
                      <Button
                        small
                        name={
                          this.state.showSpinner ? <SpinnerPage /> : "Following"
                        }
                        color="black"
                        backgroundcolor="white"
                        borderColor="lightgray"
                        width="90px"
                        onClick={() => this.setState({ smShow: true })}
                      />
                    ) : (
                      <Button
                        small
                        name={
                          this.state.showSpinner ? <SpinnerPage /> : "Follow"
                        }
                        color="white"
                        backgroundcolor="#3897F0"
                        width="65px"
                        onClick={() => this.spinner()}
                      />
                    )}
                  </div>
                </div>
              );
            } else {
              return (
                <div className="notification">
                  <div
                    style={{
                      display: "flex",
                      // justifyContent: "center",
                      alignItems: "center",
                      width: "80%"
                    }}
                  >
                    <div className="profilePicCircle">
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 100
                        }}
                        src={require("../../../assets/exam.jpg")}
                        alt=""
                      />
                    </div>
                    <div className="NotificationPersonName">
                      {value.username}
                      <div style={{ fontWeight: 400, display: "flex" }}>
                        {value.whatDo}
                        <div style={{ color: "gray", marginLeft: 5 }}>
                          {value.days}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {this.state.following ? (
                      <Button
                        small
                        name={
                          this.state.showSpinner ? <SpinnerPage /> : "Following"
                        }
                        color="black"
                        backgroundcolor="white"
                        borderColor="lightgray"
                        width="90px"
                        onClick={() => this.setState({ smShow: true })}
                      />
                    ) : (
                      <Button
                        small
                        name={
                          this.state.showSpinner ? <SpinnerPage /> : "Follow"
                        }
                        color="white"
                        backgroundcolor="#3897F0"
                        width="65px"
                        onClick={() => this.spinner()}
                      />
                    )}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </Popover>
    );
    return (
      <div className="header" id="header">
        <Modal
          size="md"
          show={this.state.smShow}
          onHide={smClose}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Body>
            <div
              style={{
                width: "100%",
                height: 50,
                alignItems: "center",
                height: 250
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%"
                }}
              >
                <div className="bigImageCircle" />
              </div>
              <div
                style={{ width: "100%", textAlign: "center", marginTop: 10 }}
              >
                Unfollow @username?
              </div>
              <div
                className="textAlignCenter FlexCenter height55 widthPer100 fontWeigth7 fontSize14 borderTransparent borderBottomColorGray borderTopColorGray marginTop30"
                style={{
                //   textAlign: "center",
                //   border: "1px solid transparent",
                //   borderBottomColor: "lightgray",
                //   borderTopColor: "lightgray",
                //   marginTop: 30,
                  color: "#ED4956",
                //   fontWeight: 700,
                //   fontSize: 14,
                //   width: "100%",
                //   height: 55,
                //   display: "flex",
                //   alignItems: "center",
                //   justifyContent: "center",
                //   cursor: "pointer"
                }}
                onClick={() => {
                  this.spinner();
                }}
              >
                Unfollow
              </div>
              <div
                className="textAlignCenter borderTransparent widthPer100 fontSize14 cursorPointer FlexCenter height55"
                style={{
                  textAlign: "center",
                  border: "1px solid transparent",
                  // borderBottomColor: "lightgray",

                  // fontWeight: 700,
                  fontSize: 14,
                  width: "100%",
                  height: 55,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
                onClick={() => {
                  this.setState({ smShow: false });
                }}
              >
                Cancel
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <div className="header-content">
          <div
            className="HeaderLogo"
            style={{ cursor: "pointer" }}
            onClick={() => (window.location = "/dashboard")}
          >
            <p>
              <img
                className="logo"
                src={require("../../../assets/istagramLogo/instagram_logo.png")}
                alt=""
              />
            </p>
            <p className="line" id="line">
              |
            </p>{" "}
            <p className="text" id="text">
              Instagram
            </p>
          </div>
          <div className="searchBar">
            <Input
              className="input searchInput"
              placeholder="Search"
              height="30px"
              width="175px"
            />
          </div>
          <div className="linksIcon cursorPointer">
            <img
              style={{ width: 30 }}
              src={compass}
              alt=""
              onClick={() => (window.location = "/explore")}
            />
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <img
                className="width30"
                // style={{ width: 30 }}
                src={heart}
                alt=""
              />
            </OverlayTrigger>
            <img
              className="width30"
              // style={{ width: 30 }}
              src={profile}
              alt=""
              onClick={() => (window.location = "/profile")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
