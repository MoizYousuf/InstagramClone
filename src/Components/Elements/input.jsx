import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div>
        {/* {this.state.value == "" ? ( */}
        <div className="inputStart">
          {/* <label className="inputPlaceHolder">{this.props.placeholder}</label> */}
          <input
            style={{
              width: this.props.width || "",
              height: this.props.height || ""
            }}
            className={this.props.className || "input"}
            type={this.props.type || "text"}
            placeholder={this.props.placeholder}
            onChange={e => this.setState({ value: e.target.value })}
          />
        </div>
        {/* ) : ( */}
        {/* <div className="inputStart1">
            {/* <label className="inputPlaceHolder1">
              {this.props.placeholder}
            </label> */}
        {/* <input
              className="input"
              placeholder={this.props.placeholder}
              type={this.props.type || "text"}
              onChange={e => this.setState({ value: e.target.value })}  */}
        {/* </div> */}
        {/* )} */}
      </div>
    );
  }
}

export default Input;
