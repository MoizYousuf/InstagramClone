import React, { Component } from "react";
import Header from "../Components/ShareComponents/Header/header";
import Footer from "../Components/ShareComponents/Footer/footer";
import Button from "../Components/Elements/buttons";
import { Tab, Tabs, Modal, Col, Row, Nav } from "react-bootstrap";
import Input from "../Components/Elements/input";

class SettingPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
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
    window.onscroll = () => {
      this.scrollFunction();
    };
    return (
      <div style={{ background: "#FAFAFA", height: "100%" }}>
        <Header />
        <div className="profilePage">
          <div className="profileTop">
            <div className="widthPer100 FlexCenter">
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="first"
                className="widthPer100"
              >
                <Row>
                  <Col sm={3} lg={4} md={4}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Edit Profile</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Change Password</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Authorized Applications
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Email And SMS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth">Manage Contacts</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="sixth">
                          Privacy and Security
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={8} lg={8} md={8}>
                    <Tab.Content className="backgroundWhite widthPer80 ">
                      <Tab.Pane
                        eventKey="first"
                        className="backgroundWhite widthPer175"
                      >
                        <div className="widthPer100 FlexCenter">
                          <div>
                            <div className="FlexCenter widthPer68 marginTop50 marginBottom20">
                              <div className="flex">
                                <div className="profilePicCircle" />
                                <div className="marginLeft20 height10">
                                  <p className="fontSize18 fontWeigth6 marginLeft-28">
                                    username
                                  </p>
                                  <p className="fontWeigth6 fontSize14 marginTop-22 marginLeft5 colorBlue">
                                    Change Profile Pic
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="FlexCenter space-between widthPer85">
                              <div className="fontWeigth6 width180 textAlignRight">
                                Name
                              </div>
                              <div className="marginLeft30">
                                <Input height="30px" width="280px" />
                              </div>
                            </div>
                            <div className="FlexCenter space-between widthPer85">
                              <div className="fontWeigth6 width180 textAlignRight">
                                Username
                              </div>
                              <div className="marginLeft30">
                                <Input height="30px" width="280px" />
                              </div>
                            </div>
                            <div className="FlexCenter space-between widthPer85">
                              <div className="fontWeigth6 width180 textAlignRight">
                                Website
                              </div>
                              <div className="marginLeft30">
                                <Input height="30px" width="280px" />
                              </div>
                            </div>
                            <div className="FlexCenter space-between widthPer85">
                              <div className="fontWeigth6 width180 textAlignRight">
                                Bio
                              </div>
                              <div className="marginLeft30">
                                <Input
                                  height="60px"
                                  width="280px"
                                  type="textarea"
                                />
                              </div>
                            </div>
                            <div className="gray marginTop30 fontWeigth6 marginRight5 fontSize14">
                              Private Information
                            </div>
                            <div className="FlexCenter space-between widthPer85 ">
                              <div className="fontWeigth6 width180 textAlignRight">
                                Email
                              </div>
                              <div className="marginLeft30">
                                <Input height="30px" width="280px" />
                              </div>
                            </div>
                            <div className="FlexCenter space-between widthPer85">
                              <div className="fontWeigth6 width180 textAlignRight">
                                Phone Number
                              </div>
                              <div className="marginLeft30">
                                <Input height="30px" width="280px" />
                              </div>
                            </div>
                            <div className="FlexCenter space-between widthPer85">
                              <div className="fontWeigth6 width180 textAlignRight">
                                Gender
                              </div>
                              <div className="marginLeft30">
                                <Input height="30px" width="280px" />
                              </div>
                            </div>
                            <div className="flex space-between widthPer69">
                              <div className="fontWeigth6 width180 textAlignRight">
                                Similar Account Suggestions
                              </div>
                              <div className="marginLeft30 FlexCenter">
                                <div>
                                  <input type="checkbox" />
                                </div>
                                <div className="fontSize12 fontWeigth7 width185 textAlignLeft">
                                  Include your account when recommending similar
                                  accounts people might want to follow.[?]
                                </div>
                              </div>
                            </div>
                            <div className="FlexCenter widthPer100 marginTop50 marginBottom20">
                              <div className=" space-between flex widthPer70 ">
                                <div>
                                  <Button
                                    name="Submit"
                                    color="white"
                                    backgroundcolor="#3897F0"
                                    small
                                  />
                                </div>
                                <div>
                                  <p className=" fontSize14 colorBlue">
                                    Temporarily disable my account
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="second"
                        className="backgroundWhite widthPer175"
                      >
                        <div className="widthPer100 FlexCenter">
                          <div>
                            <div className="FlexCenter widthPer68 marginTop50 marginBottom20">
                              <div className="flex">
                                <div className="profilePicCircle" />
                                <div className="marginLeft20 height10">
                                  <p className="fontSize18 fontWeigth6 marginLeft5 MarginTop5 marginLeft-28">
                                    {/* {this.props.name} */}
                                    username
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="FlexCenter space-between widthPer85 ">
                              <div className="fontWeigth6 width180 textAlignRight">
                                Old Password
                              </div>
                              <div className="marginLeft30">
                                <Input height="40px" width="280px" />
                              </div>
                            </div>
                            <div className="FlexCenter space-between widthPer85">
                              <div className="fontWeigth6 width180 textAlignRight MarginTop10">
                                New Password
                              </div>
                              <div className="marginLeft30">
                                <Input height="40px" width="280px" />
                              </div>
                            </div>
                            <div className="FlexCenter space-between widthPer85 MarginTop5">
                              <div className="fontWeigth6 width180 textAlignRight">
                                Confirm New Password
                              </div>
                              <div className="marginLeft30">
                                <Input height="40px" width="280px" />
                              </div>
                            </div>

                            <div className="FlexCenter widthPer100 marginTop50 marginBottom20">
                              <div className="widthPer40 flex flexDirectionCol flex-start textAlignLeft">
                                <div>
                                  <Button
                                    name="Change Password"
                                    color="white"
                                    backgroundcolor="#3897F0"
                                    small
                                  />
                                </div>
                                <div>
                                  <p className=" fontSize14 colorBlue fontWeigth6 marginTop15">
                                    Forgot Password
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="third"
                        className="backgroundWhite widthPer175 height400"
                      >
                        <div className="widthPer100 FlexCenter">
                          <div>
                            <div className="FlexCenter widthPer100 gray marginTop50 marginBottom20">
                              You have not authorized any applications to access
                              your Instagram account.
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="fourth"
                        className="backgroundWhite widthPer175  height400"
                      >
                        <div className=" widthPer100  FlexCenter">
                          <div className="widthPer80 textAlignLeft">
                            <div>
                              <p className="fontSize24">Subscribe to: </p>
                            </div>
                            <div>
                              <div>
                                <p className="fontWeigth6">
                                  <input type="checkbox" />
                                  &nbsp; News Email
                                </p>
                                <p className="colorGray marginBottom15 fontSize14">
                                  Find out first about new products.
                                </p>
                              </div>
                              <div>
                                <p className="fontWeigth6">
                                  <input type="checkbox" />
                                  &nbsp; Reminder emails
                                </p>
                                <p className="colorGray marginBottom15 fontSize14">
                                  Stay up to date with things you may have
                                  missed.
                                </p>
                              </div>
                              <div>
                                <p className="fontWeigth6">
                                  <input type="checkbox" />
                                  &nbsp; Product emails
                                </p>
                                <p className="colorGray marginBottom15 fontSize14">
                                  Get tips on using Instagram's tools.
                                </p>
                              </div>
                              <div>
                                <p className="fontWeigth6">
                                  <input type="checkbox" />
                                  &nbsp; Research emails
                                </p>
                                <p className="colorGray marginBottom15 fontSize14">
                                  Provide feedback and participate in research
                                  studies.
                                </p>
                              </div>
                              <div>
                                <p className="fontWeigth6">
                                  <input type="checkbox" />
                                  &nbsp; Text (SMS) Messages
                                </p>
                                <p className="colorGray marginBottom15 fontSize14">
                                  Get reminder notifications delivered by text
                                  message.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="fourth"
                        className="backgroundWhite widthPer175  height400"
                      >
                        <div className=" widthPer100  FlexCenter">
                          <div className="widthPer80 textAlignLeft">
                            <div>
                              <p className="fontSize24">Subscribe to: </p>
                            </div>
                            <div>
                              <div>
                                <p className="fontWeigth6">
                                  <input type="checkbox" />
                                  &nbsp; News Email
                                </p>
                                <p className="colorGray marginBottom15 fontSize14">
                                  Find out first about new products.
                                </p>
                              </div>
                              <div>
                                <p className="fontWeigth6">
                                  <input type="checkbox" />
                                  &nbsp; Reminder emails
                                </p>
                                <p className="colorGray marginBottom15 fontSize14">
                                  Stay up to date with things you may have
                                  missed.
                                </p>
                              </div>
                              <div>
                                <p className="fontWeigth6">
                                  <input type="checkbox" />
                                  &nbsp; Product emails
                                </p>
                                <p className="colorGray marginBottom15 fontSize14">
                                  Get tips on using Instagram's tools.
                                </p>
                              </div>
                              <div>
                                <p className="fontWeigth6">
                                  <input type="checkbox" />
                                  &nbsp; Research emails
                                </p>
                                <p className="colorGray marginBottom15 fontSize14">
                                  Provide feedback and participate in research
                                  studies.
                                </p>
                              </div>
                              <div>
                                <p className="fontWeigth6">
                                  <input type="checkbox" />
                                  &nbsp; Text (SMS) Messages
                                </p>
                                <p className="colorGray marginBottom15 fontSize14">
                                  Get reminder notifications delivered by text
                                  message.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="fifth"
                        className="backgroundWhite widthPer120   height450"
                      >
                        <div className=" widthPer100  FlexCenter">
                          <div className="widthPer80 textAlignLeft">
                            <div>
                              <p className="fontSize24">Manage Contacts </p>
                            </div>
                            <div className="widthPer100">
                              <div>
                                <p>
                                  The people listed here are contacts you've
                                  uploaded to Instagram. To remove your synced
                                  contacts, tap Delete All. If you delete your
                                  contacts from this page, new contacts you add
                                  to your phone will be uploaded. If you want to
                                  stop syncing, go to your device settings and
                                  turn off access to contacts.
                                </p>
                                <p>
                                  Only you can see your contacts, but Instagram
                                  uses the info you've uploaded about your
                                  contacts to make friend suggestions for you
                                  and others and to provide a better experience
                                  for everyone.`
                                </p>
                                <div>
                                  <div className="flex JustifyContentSpaceBetween">
                                    <p className="fontWeigth6 ">
                                      0 Synced Contacts
                                    </p>
                                    <p>Delete All</p>
                                  </div>
                                  <div className="borderGray widthPer100" />
                                </div>
                                <div className="flex MarginTop20">
                                  <p>
                                    When you upload your contacts to Instagram,
                                    you'll see them here.
                                  </p>
                                </div>
                                <div className="borderGray widthPer100 MarginTop10" />
                                <div className="MarginTop20 ">
                                  <Button
                                    name="Delete All"
                                    color="white"
                                    backgroundcolor="#3897F0"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="sixth"
                        className="backgroundWhite widthPer120  "
                      >
                        <div className=" widthPer100  FlexCenter">
                          <div className="widthPer80 textAlignLeft">
                            <div>
                              <p className="fontSize24">Account Privacy</p>
                            </div>
                            <div>
                              <p className="fontWeigth6 fontSize12 ">
                                <input type="checkbox" className="marginTop5" />
                                &nbsp; Private Account
                              </p>
                              <p className="colorGray marginBottom15 fontSize14">
                                When your account is private, only people you
                                approve can see your photos and videos on
                                Instagram. Your existing followers won't be
                                affected.
                              </p>
                            </div>
                            <div>
                              <p className="fontSize24">Account Status</p>
                            </div>
                            <div>
                              <p className="fontWeigth6 fontSize12 ">
                                <input type="checkbox" className="marginTop5" />
                                &nbsp; Show Activity Status
                              </p>
                              <p className="colorGray marginBottom15 fontSize14">
                                Allow accounts you follow and anyone you message
                                to see when you were last active on Instagram
                                apps. When this is turned off, you won't be able
                                to see the activity status of other accounts.
                              </p>
                            </div>
                            <div>
                              <p className="fontSize24">Story Sharing</p>
                            </div>
                            <div>
                              <p className="fontWeigth6 fontSize12 ">
                                <input type="checkbox" className="marginTop5" />
                                &nbsp; Allow Sharing
                              </p>
                              <p className="colorGray marginBottom15 fontSize14">
                                Let people share your story as messages
                              </p>
                            </div>
                            <div>
                              <p className="fontSize24">Comments</p>
                            </div>
                            <div>
                              <p className="colorDefault fontWeigth6  fontSize14">
                                Edit Comment Settings
                              </p>
                            </div>
                            <div>
                              <p className="fontSize24">Photos of You</p>
                            </div>
                            <div>
                              <p className="fontWeigth6 fontSize12 ">
                                <input type="checkbox" className="marginTop5" />
                                &nbsp; Add Automatically
                              </p>
                              <p className="fontWeigth6 fontSize12 ">
                                <input type="checkbox" className="marginTop5" />
                                &nbsp; Add Manually
                              </p>
                              <p className="colorGray marginBottom15 fontSize14">
                                Choose how you want photos of you added to your
                                profile.{" "}
                                <b className="fontWeigth2 colorDefault">
                                  Learn more
                                </b>{" "}
                                about Photos of You.
                              </p>
                            </div>
                            <div>
                              <p className="fontSize24">Account Data</p>
                            </div>
                            <div>
                              <p className="colorDefault fontWeigth6  fontSize14">
                                View Account Data
                              </p>
                            </div>
                            <div>
                              <p className="fontSize24">
                                Two-Factor Authentication
                              </p>
                            </div>
                            <div>
                              <p className="colorDefault fontWeigth6  fontSize14">
                                Edit Two-Factor Authentication Setting
                              </p>
                            </div>
                            <div>
                              <p className="fontSize24">Data Download</p>
                            </div>
                            <div>
                              <p className="colorDefault fontWeigth6  fontSize14">
                                Request Download
                              </p>
                            </div>
                            <div>
                              <p className="fontSize24">
                                Privacy and Security Help
                              </p>
                            </div>
                            <div>
                              <p className="colorDefault fontWeigth6  fontSize14">
                                Support
                              </p>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default SettingPage;
