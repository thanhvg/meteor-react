import React from 'react';
import {Modal, Well, Grid, Row, Col, OverlayTrigger, Popover, Tooltip, Header, Body, Footer, Button} from 'react-bootstrap';
import ProblemNote from './ProblemNote.js';


export default class MyModal extends React.Component {
  constructor(props) {
    super(props);
    // const {cell, row, formatExtraData, rowIdx} = {props};
    this.state = {
      showModal: false,
      note: props.row.note
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleNote = this.handleNote.bind(this);
    this.save = this.save.bind(this);
  }

  close() {
    this.setState({showModal: false});
  }

  open() {
    this.setState({showModal: true});
  }

  handleNote(note) {
    this.setState({
      note:note
    });
    console.log(note);
  }

  save() {
    // call meteor save note
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    const {cell, row, formatExtraData, rowIdx} = this.props;

    return (
      <div>
        <Button bsStyle="primary" onClick={this.open}>
          Details
        </Button>

        <Modal bsSize="large" show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Grid>
              <div className="container col-md-9">
                <Row className="show-grid">
                  <Col xs={6} md={4}>
                    <h4>System ID</h4>
                    <Well>{row.systemId}</Well>
                  </Col>
                  <Col xs={6} md={4}>
                    <h4>MAC Address</h4>
                    <Well>{row.mac}</Well>
                  </Col>
                  <Col xs={6} md={4}>
                    <h4>Ticket</h4>
                    <Well>{row.ticket}</Well>
                  </Col>
                </Row>
              </div>
              <div className="container col-md-9">
                <Row className="show-grid">
                  <Col xs={6} md={4}>
                    <h4>Customer</h4>
                    <Well>{row.customer}</Well>
                  </Col>
                  <Col xs={6} md={4}>
                    <h4>Email</h4>
                    <Well>
                      <a href={'mailto:' + row.email}>{row.email}</a>
                    </Well>
                  </Col>
                  <Col xs={6} md={4}>
                    <h4>Date</h4>
                    <Well>{row.date}</Well>
                  </Col>
                </Row>

              </div>
              <div className="container col-md-9">
                <Row className="show-grid">
                  <Col xs={6} md={4}>
                    <h4>Product</h4>
                    <Well>{row.product}</Well>
                  </Col>
                  <Col xs={6} md={4}>
                    <h4>Version</h4>
                    <Well>{row.version}</Well>
                  </Col>
                  <Col xs={6} md={4}>
                    <h4>Catergory</h4>
                    <Well>{row.category}</Well>
                  </Col>
                </Row>
              </div>
            </Grid>

            <h4>What they were doing</h4>
            <Well>{row.whatWereDoing}</Well>

            <h4>Platform</h4>
            <Well>{row.platform}</Well>

            <h4>Description</h4>
            <Well>{row.description}</Well>

            <h4>Browser</h4>
            <Well>{row.browser}</Well>

            <h4>Tarball</h4>
            <Well>{row.tarball}</Well>

            <h4>Note, click to edit</h4>
            <ProblemNote handleChange={this.handleNote} note={row.note}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button bsStyle="primary" onClick={this.save}>Save Note</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
