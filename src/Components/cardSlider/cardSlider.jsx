import React from "react";
import Button from "../Elements/buttons";

// const dataSuggestions = [{
//   name: "iarbazyousuf",
//   suggest: "Friend on Facebook"
// },
// {
//   name: "iarbazyousuf",
//   suggest: "Friend on Facebook"
// },
// {
//   name: "iarbazyousuf",
//   suggest: "Friend on Facebook"
// },
// {
//   name: "iarbazyousuf",
//   suggest: "Friend on Facebook"
// },
// ]

export default class CardSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  render() {
    return (
      <div className="FlexCenter overFlowX widthPer100">
        <div
          id="demo"
          className="carousel slide widthPer100"
          data-ride="carousel"
          // style={{ width: "100%" }}
        >
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active" />
            <li data-target="#demo" data-slide-to="1" />
            <li data-target="#demo" data-slide-to="2" />
          </ul>

          <div className="carousel-inner">
            <div className="carousel-item active ">
              <div className="FlexCenter">
                <div className="cardFollow">
                  <div
                    className="FlexCenter widthPer100 marginTop15"
                    // style={{
                    //   display: "flex",
                    //   width: "100%",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   marginTop: 15
                    // }}
                  >
                    <div
                      className="profilePicCircle1 height60 width60"
                      // style={{ width: 60, height: 60 }}
                    />
                  </div>
                  <div className="FlexCenter fontSize14 fontWeigth6 MarginTop10">
                    iarbazyousuf
                  </div>
                  <div className="FlexCenter lightgray FontSize12  MarginTop5">
                    Freind on Facebook
                  </div>
                  <div>
                    <Button
                      marginTop="10px"
                      color="white"
                      backgroundcolor="#3897F0"
                      width="65px"
                      name="Follow"
                      small
                    />
                  </div>
                </div>
                <div className="cardFollow">
                  <div
                    className="FlexCenter widthPer100 marginTop15"
                    // style={{
                    //   display: "flex",
                    //   width: "100%",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   marginTop: 15
                    // }}
                  >
                    <div
                      className="profilePicCircle1 height60 width60"
                      // style={{ width: 60, height: 60 }}
                    />
                  </div>
                  <div className="FlexCenter fontSize14 fontWeigth6 MarginTop10">
                    iarbazyousuf
                  </div>
                  <div className="FlexCenter lightgray FontSize12  MarginTop5">
                    Freind on Facebook
                  </div>
                  <div>
                    <Button
                      marginTop="10px"
                      color="white"
                      backgroundcolor="#3897F0"
                      width="65px"
                      name="Follow"
                      small
                    />
                  </div>
                </div>
                <div className="cardFollow">
                  <div
                    className="FlexCenter widthPer100 marginTop15"
                    // style={{
                    //   display: "flex",
                    //   width: "100%",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   marginTop: 15
                    // }}
                  >
                    <div
                      className="profilePicCircle1 height60 width60"
                      // style={{ width: 60, height: 60 }}
                    />
                  </div>
                  <div className="FlexCenter fontSize14 fontWeigth6 MarginTop10">
                    iarbazyousuf
                  </div>
                  <div className="FlexCenter lightgray FontSize12  MarginTop5">
                    Freind on Facebook
                  </div>
                  <div>
                    <Button
                      marginTop="10px"
                      color="white"
                      backgroundcolor="#3897F0"
                      width="65px"
                      name="Follow"
                      small
                    />
                  </div>
                </div>
                <div className="cardFollow">
                  <div
                    className="FlexCenter widthPer100 marginTop15"
                    // style={{
                    //   display: "flex",
                    //   width: "100%",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   marginTop: 15
                    // }}
                  >
                    <div
                      className="profilePicCircle1 height60 width60"
                      // style={{ width: 60, height: 60 }}
                    />
                  </div>
                  <div className="FlexCenter fontSize14 fontWeigth6 MarginTop10">
                    iarbazyousuf
                  </div>
                  <div className="FlexCenter lightgray FontSize12  MarginTop5">
                    Freind on Facebook
                  </div>
                  <div>
                    <Button
                      marginTop="10px"
                      color="white"
                      backgroundcolor="#3897F0"
                      width="65px"
                      name="Follow"
                      small
                    />
                  </div>
                </div>
                <div className="cardFollow">
                  <div
                    className="FlexCenter widthPer100 marginTop15"
                    // style={{
                    //   display: "flex",
                    //   width: "100%",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   marginTop: 15
                    // }}
                  >
                    <div
                      className="profilePicCircle1 height60 width60"
                      // style={{ width: 60, height: 60 }}
                    />
                  </div>
                  <div className="FlexCenter fontSize14 fontWeigth6 MarginTop10">
                    iarbazyousuf
                  </div>
                  <div className="FlexCenter lightgray FontSize12  MarginTop5">
                    Freind on Facebook
                  </div>
                  <div>
                    <Button
                      marginTop="10px"
                      color="white"
                      backgroundcolor="#3897F0"
                      width="65px"
                      name="Follow"
                      small
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="FlexCenter">
                <div className="cardFollow">
                  <div
                    className="FlexCenter widthPer100 marginTop15"
                    // style={{
                    //   display: "flex",
                    //   width: "100%",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   marginTop: 15
                    // }}
                  >
                    <div
                      className="profilePicCircle1 height60 width60"
                      // style={{ width: 60, height: 60 }}
                    />
                  </div>
                  <div className="FlexCenter fontSize14 fontWeigth6 MarginTop10">
                    iarbazyousuf
                  </div>
                  <div className="FlexCenter lightgray FontSize12  MarginTop5">
                    Freind on Facebook
                  </div>
                  <div>
                    <Button
                      marginTop="10px"
                      color="white"
                      backgroundcolor="#3897F0"
                      width="65px"
                      name="Follow"
                      small
                    />
                  </div>
                </div>
                <div className="cardFollow">
                  <div
                    className="FlexCenter widthPer100 marginTop15"
                    // style={{
                    //   display: "flex",
                    //   width: "100%",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   marginTop: 15
                    // }}
                  >
                    <div
                      className="profilePicCircle1 height60 width60"
                      // style={{ width: 60, height: 60 }}
                    />
                  </div>
                  <div className="FlexCenter fontSize14 fontWeigth6 MarginTop10">
                    iarbazyousuf
                  </div>
                  <div className="FlexCenter lightgray FontSize12  MarginTop5">
                    Freind on Facebook
                  </div>
                  <div>
                    <Button
                      marginTop="10px"
                      color="white"
                      backgroundcolor="#3897F0"
                      width="65px"
                      name="Follow"
                      small
                    />
                  </div>
                </div>
                <div className="cardFollow">
                  <div
                    className="FlexCenter widthPer100 marginTop15"
                    // style={{
                    //   display: "flex",
                    //   width: "100%",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   marginTop: 15
                    // }}
                  >
                    <div
                      className="profilePicCircle1 height60 width60"
                      // style={{ width: 60, height: 60 }}
                    />
                  </div>
                  <div className="FlexCenter fontSize14 fontWeigth6 MarginTop10">
                    iarbazyousuf
                  </div>
                  <div className="FlexCenter lightgray FontSize12  MarginTop5">
                    Freind on Facebook
                  </div>
                  <div>
                    <Button
                      marginTop="10px"
                      color="white"
                      backgroundcolor="#3897F0"
                      width="65px"
                      name="Follow"
                      small
                    />
                  </div>
                </div>
                <div className="cardFollow">
                  <div
                    className="FlexCenter widthPer100 marginTop15"
                    // style={{
                    //   display: "flex",
                    //   width: "100%",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   marginTop: 15
                    // }}
                  >
                    <div
                      className="profilePicCircle1 height60 width60"
                      // style={{ width: 60, height: 60 }}
                    />
                  </div>
                  <div className="FlexCenter fontSize14 fontWeigth6 MarginTop10">
                    iarbazyousuf
                  </div>
                  <div className="FlexCenter lightgray FontSize12  MarginTop5">
                    Freind on Facebook
                  </div>
                  <div>
                    <Button
                      marginTop="10px"
                      color="white"
                      backgroundcolor="#3897F0"
                      width="65px"
                      name="Follow"
                      small
                    />
                  </div>
                </div>
                <div className="cardFollow">
                  <div
                    className="FlexCenter widthPer100 marginTop15"
                    // style={{
                    //   display: "flex",
                    //   width: "100%",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   marginTop: 15
                    // }}
                  >
                    <div
                      className="profilePicCircle1 height60 width60"
                      // style={{ width: 60, height: 60 }}
                    />
                  </div>
                  <div className="FlexCenter fontSize14 fontWeigth6 MarginTop10">
                    iarbazyousuf
                  </div>
                  <div className="FlexCenter lightgray FontSize12  MarginTop5">
                    Freind on Facebook
                  </div>
                  <div>
                    <Button
                      marginTop="10px"
                      color="white"
                      backgroundcolor="#3897F0"
                      width="65px"
                      name="Follow"
                      small
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="FlexCenter">
                <div className="cardFollow">
                  <div
                    className="FlexCenter widthPer100 marginTop15"
                    // style={{
                    //   display: "flex",
                    //   width: "100%",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   marginTop: 15
                    // }}
                  >
                    <div
                      className="profilePicCircle1 height60 width60"
                      // style={{ width: 60, height: 60 }}
                    />
                  </div>
                  <div className="FlexCenter fontSize14 fontWeigth6 MarginTop10">
                    iarbazyousuf
                  </div>
                  <div className="FlexCenter lightgray FontSize12  MarginTop5">
                    Freind on Facebook
                  </div>
                  <div>
                    <Button
                      marginTop="10px"
                      color="white"
                      backgroundcolor="#3897F0"
                      width="65px"
                      name="Follow"
                      small
                    />
                  </div>
                </div>
                <div className="cardFollow">
                  <div
                    className="FlexCenter widthPer100 marginTop15"
                    // style={{
                    //   display: "flex",
                    //   width: "100%",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   marginTop: 15
                    // }}
                  >
                    <div
                      className="profilePicCircle1 height60 width60"
                      // style={{ width: 60, height: 60 }}
                    />
                  </div>
                  <div className="FlexCenter fontSize14 fontWeigth6 MarginTop10">
                    iarbazyousuf
                  </div>
                  <div className="FlexCenter lightgray FontSize12  MarginTop5">
                    Freind on Facebook
                  </div>
                  <div>
                    <Button
                      marginTop="10px"
                      color="white"
                      backgroundcolor="#3897F0"
                      width="65px"
                      name="Follow"
                      small
                    />
                  </div>
                </div>
                <div className="cardFollow">
                  <div
                    className="FlexCenter widthPer100 marginTop15"
                    // style={{
                    //   display: "flex",
                    //   width: "100%",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   marginTop: 15
                    // }}
                  >
                    <div
                      className="profilePicCircle1 height60 width60"
                      // style={{ width: 60, height: 60 }}
                    />
                  </div>
                  <div className="FlexCenter fontSize14 fontWeigth6 MarginTop10">
                    iarbazyousuf
                  </div>
                  <div className="FlexCenter lightgray FontSize12  MarginTop5">
                    Freind on Facebook
                  </div>
                  <div>
                    <Button
                      marginTop="10px"
                      color="white"
                      backgroundcolor="#3897F0"
                      width="65px"
                      name="Follow"
                      small
                    />
                  </div>
                </div>
                <div className="cardFollow">
                  <div
                    className="FlexCenter widthPer100 marginTop15"
                    // style={{
                    //   display: "flex",
                    //   width: "100%",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   marginTop: 15
                    // }}
                  >
                    <div
                      className="profilePicCircle1 height60 width60"
                      // style={{ width: 60, height: 60 }}
                    />
                  </div>
                  <div className="FlexCenter fontSize14 fontWeigth6 MarginTop10">
                    iarbazyousuf
                  </div>
                  <div className="FlexCenter lightgray FontSize12  MarginTop5">
                    Freind on Facebook
                  </div>
                  <div>
                    <Button
                      marginTop="10px"
                      color="white"
                      backgroundcolor="#3897F0"
                      width="65px"
                      name="Follow"
                      small
                    />
                  </div>
                </div>
                <div className="cardFollow">
                  <div
                    className="FlexCenter widthPer100 marginTop15"
                    // style={{
                    //   display: "flex",
                    //   width: "100%",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   marginTop: 15
                    // }}
                  >
                    <div
                      className="profilePicCircle1 height60 width60"
                      // style={{ width: 60, height: 60 }}
                    />
                  </div>
                  <div className="FlexCenter fontSize14 fontWeigth6 MarginTop10">
                    iarbazyousuf
                  </div>
                  <div className="FlexCenter lightgray FontSize12  MarginTop5">
                    Freind on Facebook
                  </div>
                  <div>
                    <Button
                      marginTop="10px"
                      color="white"
                      backgroundcolor="#3897F0"
                      width="65px"
                      name="Follow"
                      small
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev " href="#demo" data-slide="prev">
            <span
              className="carousel-control-prev-icon"
              style={{ color: "black" }}
            />
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span
              className="carousel-control-next-icon"
              style={{ color: "black", outline: "black" }}
            />
          </a>
        </div>
      </div>
    );
  }
}
