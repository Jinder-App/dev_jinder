import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../actions/index';
import CandidateSignIn from '../components/CandidateComponents/CandidateSignIn';
import CandidateSignUp from '../components/CandidateComponents/CandidateSignUp';

class CandidateContainer extends React.Component {

  render() {
    return(
      <div className='candidate-container'>
        <h1>Job or nah?</h1>
        {
          this.props.registered
          ? <CandidateSignIn/>
          : <CandidateSignUp/>
        }
        {
          this.props.siggnedIn
          ? <span>You are siggned in!</span>
          : <span>You are NOT signned in!</span>
        }
        <NavLink to="/"><button type="button" className="btn btn-danger">Home</button></NavLink>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    registered: state.candidate.registered,
    signnedIn: state.candidate.siggnedIn,
  }
}

export default connect(mapStateToProps, actions)(CandidateContainer);
