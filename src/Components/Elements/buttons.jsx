import React, { Component } from "react";
import "../style.css";

class Button extends Component {
  render() {
    return (
      <div>
        {this.props.large ? (
          <button
            onClick={() => (window.location = "/dashboard")}
            style={{
              background: this.props.backgroundcolor,
              color: this.props.color,
              marginTop: this.props.marginTop || 0
            }}
            className="largeButton"
          >
            {this.props.name}
          </button>
        ) : this.props.small ? (
          <button
            style={{
              background: this.props.backgroundcolor,
              color: this.props.color,
              borderColor: this.props.borderColor,
              outline: "none",
              marginTop: this.props.marginTop,
              marginBottom: this.props.marginBottom,
              marginRight: this.props.marginRight,
              width: this.props.width,
              fontSize: this.props.fontSize,
              padding: this.props.padding,
              
            }}
            className="smallButton"
            onClick={this.props.onClick}
          >
            {this.props.name}
          </button>
        ) : this.props.facebook ? (
          <button
            style={{
              background: this.props.backgroundcolor,
              color: this.props.color
            }}
            className="largeButton"
          >
            {this.props.name}
          </button>
        ) : (
          <button
            style={{
              background: this.props.backgroundcolor,
              color: this.props.color
            }}
            className="mediumButton"
          >
            {this.props.name}
          </button>
        )}
      </div>
    );
  }
}

export default Button;
