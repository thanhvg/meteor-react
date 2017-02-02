import React from 'react';
import { Jumbotron } from 'react-bootstrap';
// import logo from './logo.svg';

const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <img src="logo.svg" className="App-logo" alt="logo" />
      <h2>Userful Cloud</h2>
      <p>Intro</p>
      <p><a className="btn btn-success" href="http://userful.com" role="button">Go to Userful Website</a></p>
      <p style={ { fontSize: '16px', color: '#aaa' } }>Version 0.1</p>
    </Jumbotron>
  </div>
);

export default Index;
