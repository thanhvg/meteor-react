import React from 'react';
import { Link } from 'react-router';
import {Table, Row, Col, Button } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';
import SearchBox from '../components/SearchBox.js';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class Cloud extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {search:this.props.location.search };
    // this.handleClick = this.handleClick.bind(this);
  }

  actionButton(cell, row) {
    // return  (<Button onClick={() => console.log(cell)}>Action</Button>);
    // console.log(arguments);
    return  (<Button bsSize="small" >{arguments[1].other + ' ' + row.id}</Button>);
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={ 12 }>
            <div className="page-header clearfix">
              <h4 className="pull-left">Service</h4>
            </div>
          </Col>
        </Row>
        <BootstrapTable data={products} striped hover>
          <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
          <TableHeaderColumn dataField='action' dataFormat={this.actionButton}  export={ false }>Action</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}



const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i,
      other: 'hidden' + i
    });
  }
}

addProducts(5);

const problems[

  {
    "_id" : "Sk3qqgtnrufoXrphE",
    "systemId" : "E00-5572-09AA-3FF1",
    "mac" : "00:01:6C:D8:59:84",
    "customer" : "Robert",
    "email" : "robertk@mysignagenow.com",
    "date" : "Wed Feb  1 11:17:49 2017",
    "uptime" : " 11:17:49 up 13 min,  0 users,  load average: 3.93, 2.55, 1.21",
    "product" : "Userful",
    "version" : "8.8.1",
    "ticket" : "97KMTA4JG",
    "note" : "",
    "category" : "Other",
    "whatWereDoing" : " USB Cannot Mount\n\nFlash Content will not play in a Browser Session.\n",
    "platform" : "Linux userful-d85984 4.4.0-2.el7.elrepo.x86_64 #1 SMP Tue Jan 26 13:06:01 EST 2016 x86_64 x86_64",
    "description" : "USB Cannot Mount\n\nFlash Content will not play in a Browser Session.\n\nMy VPN IP# 172.26.0.178",
    "browser" : "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/538.15 (KHTML, like Gecko) Version/8.0 Safari/538.15",
    "tarball" : "E00-5572-09AA-3FF1-1485965869.tar.gz"
  }
  {
    "_id": "HG4TAknMDtPErTeEq",
    "systemId": "E00-5572-09AA-3FF1",
    "mac": "00:01:6C:D8:59:84",
    "customer": "Robert Knight",
    "email": "robertk@mysignagenow.com",
    "date": "Wed Jan 25 12:52:33 2017",
    "uptime": " 12:52:32 up 15 min,  2 users,  load average: 0.06, 0.16, 0.22",
    "product": "Userful",
    "version": "8.8.1",
    "ticket": "0874ERJ2G",
    "note": "",
    "category": "USB Devices",
    "whatWereDoing": " Accessing a USB drive\n",
    "platform": "Linux userful-d85984 4.4.0-2.el7.elrepo.x86_64 #1 SMP Tue Jan 26 13:06:01 EST 2016 x86_64 x86_64",
    "description": "USB appears on the Computer folder but cant be accessed. Mounting from CLI returns error \"mount: /dev/sdd is not a valid block device\"",
    "browser": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/538.15 (KHTML, like Gecko) Version/8.0 Safari/538.15",
    "tarball": "E00-5572-09AA-3FF1-1485366752.tar.gz"
  }
]
