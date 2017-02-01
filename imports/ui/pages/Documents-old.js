import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';
import SearchBox from '../components/SearchBox.js';

const myHandle = (me) => console.log(me);

const Documents = ({location}) => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Documents</h4>
          <Link to="/documents/new">
            <Button
              bsStyle="success"
              className="pull-right"
            >New Document</Button>
          </Link>
        </div>
        <SearchBox query={location.query.search} handle={myHandle}/>
        <DocumentsList query={location.query.search}/>
      </Col>
    </Row>
  </div>
);

export default Documents;
