import React, { Component } from "react";

class BootstrapInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  render() {
    return (
      <div>
        {this.state.value != "" ? (
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback" />
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        ) : (
          <div className="inputStart">
            <input
              style={{
                width: this.props.width || "",
                height: this.props.height || ""
              }}
              className="input"
              type={this.props.type || "text"}
              placeholder={this.props.placeholder}
              onChange={e => this.setState({ value: e.target.value })}
            />
          </div>
        )}
      </div>
    );
  }
}

export default BootstrapInput;
