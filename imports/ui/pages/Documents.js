import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';
import SearchBox from '../components/SearchBox.js';

export default class Documents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search:this.props.location.search };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(query) {
    this.setState({search:query});
  }

  render() {
    return (
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
            <SearchBox query={this.state.search} handle={this.handleClick}/>
            <DocumentsList query={this.state.search}/>
          </Col>
        </Row>
      </div>
    );
  }
}
