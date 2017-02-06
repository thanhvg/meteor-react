
import React from 'react';
import { FormControl, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

export default class ProblemNote extends React.Component {

  constructor(props) {
    super(props);
    this.state = {readOnly:true};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick()  {
    this.setState({readOnly:false});
  }

  handleChange(e) {
    console.log(e.target.value);
    this.props.handleChange(e.target.value);
  }

  render() {
    return (
        <FormControl
          componentClass="textarea"
          defaultValue={this.props.note}
          readOnly={this.state.readOnly}
          rows="9"
          onClick={this.handleClick}
          onChange={this.handleChange}
        />
    );
  }
}
