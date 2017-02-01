import React from 'react';
import {InputGroup, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

// const SearchBox = ({query}) => (
//     <Form inline>
//       <FormControl type="text" defaultValue={query} name="search"/>
//       <Button type="submit" className="pull-right"> Search
//       </Button>
//     </Form>
//   );


const SearchBox = ({query, handle}) => (
    <FormGroup>
      <InputGroup>
        <FormControl type="text" defaultValue={query} name="search"/>
        <InputGroup.Button>
          <Button onClick={handle()}>Search</Button>
        </InputGroup.Button>
      </InputGroup>
    </FormGroup>
  );


export default SearchBox;
