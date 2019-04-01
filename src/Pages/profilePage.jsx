import React, { Component } from "react";
import Header from "../Components/ShareComponents/Header/header";
import Footer from "../Components/ShareComponents/Footer/footer";
import Button from "../Components/Elements/buttons";
import { Tab, Tabs, Modal } from "react-bootstrap";
import ImageCard from "../Components/Elements/imageCard";
import ProfileSuggestion from "../Components/Suggestion/profilePicWithName";

const post = [
  <div>
    <i class="fas fa-th" /> POSTS
  </div>
];
const igtv = [
  <div>
    <i class="fas fa-tv" /> IGTV
  </div>
];
const SAVED = [
  <div>
    <i class="far fa-bookmark" /> SAVED
  </div>
];
const taged = [
  <div>
    <i class="far fa-user-circle" /> TAGED
  </div>
];

class ProfilePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "home",
      key1: "hashtags",
      mdShow: false,
      smShow: false,
      folShow: false
    };
  }
  scrollFunction = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("header").style.maxHeight = "50px";
      document.getElementById("header").style.transition =
        "max-height 0.25s ease-out;";
      document.getElementById("line").style.display = "none";
      document.getElementById("text").style.display = "none";
    } else {
      document.getElementById("header").style.maxHeight = "80px";
      document.getElementById("header").style.transition =
        "max-height 0.25s ease-in";
      document.getElementById("line").style.display = "block";
      document.getElementById("text").style.display = "block";
    }
  };
  render() {
    let mdClose = () => this.setState({ mdShow: false });
    let smClose = () => this.setState({ mdShow: false });
    let folClose = () => this.setState({ mdShow: false });

    window.onscroll = () => {
      this.scrollFunction();
    };
    return (
      <div style={{ background: "#FAFAFA", height: "100%" }}>
        <Header />
        <div className="profilePage">
          <div className="profileTop">
            <div className="FlexCenter JustifyContentSpaceBetween data">
              <div className="profileCircle " />
              <div style={{ marginTop: -35 }}>
                <div
                  className="FlexCenter JustifyContentSpaceBetween"
                  style={{ width: 300, alignItems: "center" }}
                >
                  <div>
                    <p className="nameHeading">itxmoizyousuf</p>
                  </div>
                  <div>
                    <Button
                      marginBottom="22px"
                      color="black"
                      backgroundcolor="transparent"
                      borderColor="lightgray"
                      name="Edit Profile"
                      small
                      onClick={() => window.location="/accounts/edit/"}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: 28,
                      marginBottom: 22,
                      cursor: "pointer"
                    }}
                    onClick={() =>
                      this.setState({
                        mdShow: true
                      })
                    }
                  >
                    <i class="far fa-sun" />
                  </div>
                </div>

                <div
                  className="FlexCenter JustifyContentSpaceBetween"
                  style={{ width: 300, alignItems: "center" }}
                >
                  <div>
                    <b className="number">6</b> posts
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        smShow: true
                      })
                    }
                  >
                    <b className="number">150</b> followers
                  </div>
                  <div
                  style={{cursor: "pointer"}}
                    onClick={() =>
                      this.setState({
                        folShow: true
                      })
                    }
                  >
                    {" "}
                    <b className="number">50</b> following
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    fontWeight: 600,
                    textAlign: "left",
                    marginTop: 15
                  }}
                >
                  Moiz Yousuf
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal
          size="sm"
          show={this.state.mdShow}
          onHide={mdClose}
          // width="1000px"
          aria-labelledby="example-modal-sizes-title-sm"
        >
          {/* <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">Share</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <div
            className="pointer"
              style={{
                textAlign: "center",
                border: "1px solid transparent",
                borderBottomColor: "lightgray",
                fontSize: 14,
                width: "100%",
                height: 40
              }}
              onClick={() => window.location="/accounts/edit/"}
            >
              Change Password
            </div>
            <div
              style={{
                textAlign: "center",
                border: "1px solid transparent",
                borderBottomColor: "lightgray",
                fontSize: 14,
                width: "100%",
                height: 55,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Nametag
            </div>
            <div
              style={{
                textAlign: "center",
                border: "1px solid transparent",
                borderBottomColor: "lightgray",

                // fontWeight: 700,
                fontSize: 14,
                width: "100%",
                height: 55,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Authorized Apps
            </div>
            <div
              style={{
                textAlign: "center",
                border: "1px solid transparent",
                borderBottomColor: "lightgray",

                // fontWeight: 700,
                fontSize: 14,
                width: "100%",
                height: 55,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Notifications
            </div>
            <div
              style={{
                textAlign: "center",
                border: "1px solid transparent",
                borderBottomColor: "lightgray",

                // fontWeight: 700,
                fontSize: 14,
                width: "100%",
                height: 55,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Privacy and Secuirity
            </div>
            <div
              style={{
                textAlign: "center",
                border: "1px solid transparent",
                borderBottomColor: "lightgray",

                // fontWeight: 700,
                fontSize: 14,
                width: "100%",
                height: 55,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"                
              }}
              onClick={() => window.location="/"}
            >
              Log Out
            </div>
            <div
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
                this.setState({ mdShow: false });
              }}
            >
              Cancel
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          size="md"
          show={this.state.smShow}
          onHide={smClose}
          style={{ overflowY: "auto" }}
          // width="1000px"
          aria-labelledby="example-modal-sizes-title-md"
        >
          <Modal.Header
            onClick={() => this.setState({ smShow: false })}
            closeButton
          >
            <Modal.Title id="example-modal-sizes-title-md">
              Followers
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                width: "100%",
                height: 200,
                overflowY: "auto",
                overflowX: "hidden"
              }}
            >
              <ProfileSuggestion
                name="talhaismail"
                social="Talha Ismail"
                marginLeft="none"
                button
              />
              <ProfileSuggestion
                name="yaseen.asif"
                social="Yaseen Asif"
                marginLeft="none"
                button
              />
              <ProfileSuggestion
                name="talhaismail"
                social="Talha Ismail"
                marginLeft="none"
                button
              />
              <ProfileSuggestion
                name="yaseen.asif"
                social="Yaseen Asif"
                marginLeft="none"
                button
              />
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          size="md"
          show={this.state.folShow}
          onHide={folClose}
          style={{ overflowY: "auto" }}
          // width="1000px"
          aria-labelledby="example-modal-sizes-title-md"
        >
          <Modal.Header
            onClick={() => this.setState({ folShow: false })}
            closeButton
          >
            <Modal.Title id="example-modal-sizes-title-md">
              Following
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="FlexCenter flexDirectionCol" style={{width: "100%", textAlign: "center"}}>
              <Tabs
                id="controlled-tab-example"
                activeKey={this.state.key1}
                onSelect={key1 => this.setState({ key1 })}
              >
                <Tab  eventKey="hashtags" title="HASHTAGS">
                  <div
                  className="FlexCenter, flexDirectionCol"
                    style={{
                      width: 480,
                      height: 200,
                      overflowY: "auto",
                      overflowX: "hidden"
                    }}
                  >
                    <ProfileSuggestion
                      name="talhaismail"
                      social="Talha Ismail"
                      marginLeft="none"
                      button
                    />
                    <ProfileSuggestion
                      name="yaseen.asif"
                      social="Yaseen Asif"
                      marginLeft="none"
                      button
                    />
                    <ProfileSuggestion
                      name="talhaismail"
                      social="Talha Ismail"
                      marginLeft="none"
                      button
                    />
                    <ProfileSuggestion
                      name="yaseen.asif"
                      social="Yaseen Asif"
                      marginLeft="none"
                      button
                    />
                  </div>
                </Tab>
                <Tab eventKey="people" title="PEOPLE"  >
                  <div className="FlexCenter" style={{ width: "100%" }}>
                    <div style={{ width: 350, marginTop: 20 }}>
                      <div style={{ fontSize: 45 }}>
                        <i class="fas fa-hashtag" />
                      </div>
                      <div
                        style={{ fontSize: 30, fontWeight: 300, marginTop: 10 }}
                      >
                        Follow Hashtags
                      </div>
                      <div style={{ fontSize: 14, marginTop: 10 }}>
                      <b style={{color: "black"}}> imujtabayousuf </b> isn't currently following any hashtags.
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Modal.Body>
        </Modal>
        <div
          className="FlexCenter flexDirectionCol"
          style={{
            marginTop: 100,
            border: "1px solid transparent",
            borderTopColor: "lightgray",
            width: "100%"
          }}
        >
          <Tabs
            id="controlled-tab-example"
            activeKey={this.state.key}
            onSelect={key => this.setState({ key })}
          >
            <Tab eventKey="home" title={post}>
              <div
                className="FlexCenter"
                style={{ textAlign: "center", width: "100%" }}
              >
                <ImageCard />
                {/* <div> */}
                {/* <img style={{width: 50}} src={require("../assets/exam.jpg")} alt=""/> */}
                {/* </div> */}
              </div>
            </Tab>
            <Tab eventKey="profile" title={igtv}>
              <div className="FlexCenter" style={{ width: "100%" }}>
                <div style={{ width: 320, marginTop: 80 }}>
                  <div style={{ fontSize: 45 }}>
                    <i class="fas fa-tv" />
                  </div>
                  <div style={{ fontSize: 30, fontWeight: 300, marginTop: 10 }}>
                    Start Sharing to IGTV
                  </div>
                  <div style={{ fontSize: 14, marginTop: 10 }}>
                    Create your channel to start sharing longer vertical videos
                    with your Instagram audience.
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <Button
                      marginTop="10px"
                      color="white"
                      backgroundcolor="#3897F0"
                      name="Get Started"
                      fontSize="15px"
                      padding="12px"
                      small
                    />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact" title={SAVED}>
              <div className="FlexCenter" style={{ width: "100%" }}>
                <div style={{ width: 350, marginTop: 80 }}>
                  <div style={{ fontSize: 45 }}>
                    <i class="far fa-bookmark" />
                  </div>
                  <div style={{ fontSize: 30, fontWeight: 300, marginTop: 10 }}>
                    Save
                  </div>
                  <div style={{ fontSize: 14, marginTop: 10 }}>
                    Save photos and videos that you want to see again. No one is
                    notified, and only you can see what you've saved.
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="taged" title={taged}>
              <div
                className="FlexCenter"
                style={{ textAlign: "center", width: "100%" }}
              >
                <ImageCard />
              </div>
            </Tab>
          </Tabs>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProfilePage;
