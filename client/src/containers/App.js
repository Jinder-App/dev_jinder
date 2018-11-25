import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeContainer from './HomeContainer';
import CandidateContainer from './CandidateContainer';

const HelloWorld = () => (
  <div>Hello World!</div>
);


class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <Route exact path='/' component={HomeContainer}/>
            <Route exact path='/CandidateContainer' component={CandidateContainer}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
