import React, { Component } from "react";
import "../style.css";
const image1 = require("../../assets/image.jpg");
const image2 = require("../../assets/image1.jpg");
const image3 = require("../../assets/image2.jpg");
const image4 = require("../../assets/image3.jpg");
const image5 = require("../../assets/image4.jpg");

class ImageAndSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      image5: image5,
      index: 1
    };
  }
  next = () => {
    // console.log("next Funtion");
    setInterval(() => {
      let i = this.state.index;
      i = ++i;
      if (i === 6) {
        this.setState({
          index: 1
        });
      } else {
        this.setState({
          index: i
        });
      }
    }, 3000);
  };
  componentDidMount() {
    this.next();
  }
  render() {
    console.log(this.state.index);
    const { image1, image2, image3 } = this.state;
    return (
      <div className="imageBg">
        {this.state.i !== 6 ? (
          <img
            className="images"
            src={
              this.state.index == 1
                ? image1
                : "" || this.state.index == 2
                ? image2
                : "" || this.state.index == 3
                ? image3
                : "" || this.state.index == 4
                ? image4
                : "" || this.state.index == 5
                ? image5
                : ""
            }
          />
        ) : (
          this.setState({ i: 1 })
        )}
      </div>
    );
  }
}

export default ImageAndSlider;
