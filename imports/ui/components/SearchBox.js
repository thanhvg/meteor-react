import React from 'react';
import {InputGroup, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
     this.setState({value: event.target.value});
    //  console.log(this.state.value);
   }

   handleSubmit(event) {
     this.props.handle(this.state.value);
     event.preventDefault();
   }

   render() {
    const {query, handle} = this.props;
    return (
      <form  onSubmit={this.handleSubmit}>
      <FormGroup>
        <InputGroup>
          <FormControl type="text" defaultValue={query} name="search" onChange={this.handleChange}/>
          <InputGroup.Button>
            <Button type="submit">Search</Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
      </form>
      );
    }
  }
