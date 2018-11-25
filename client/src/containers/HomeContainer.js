import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../actions/index';

class HomeContainer extends React.Component {

  render() {
    return(
      <div className='home-container'>
        <h1>Job or nah?</h1>
        <NavLink to="/CandidateContainer">
          <button type="button" className="btn btn-warning">Sign in as candidate</button>
        </NavLink>
        <button type="button" className="btn btn-warning">Sign in to post jobs</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, actions)(HomeContainer);
