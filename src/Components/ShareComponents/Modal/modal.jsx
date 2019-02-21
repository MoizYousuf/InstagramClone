import React, { Component } from "react";
import {} from "react-bootstrap"

class Modal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      smShow: false,
      lgShow: false
    };
  }

  render() {
    let smClose = () => this.setState({ smShow: false });
    // let lgClose = () => this.setState({ lgShow: false });

    return (
      <ButtonToolbar>
        <Button onClick={() => this.setState({ smShow: true })}>
          Small modal
        </Button>
        {/* <Button onClick={() => this.setState({ lgShow: true })}>
          Large modal
        </Button> */}

        <Modal
          size="sm"
          show={this.state.smShow}
          onHide={smClose}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>

        {/* <Modal
          size="lg"
          show={this.state.lgShow}
          onHide={lgClose}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal> */}
      </ButtonToolbar>
    );
  }
}

export default Modal;
