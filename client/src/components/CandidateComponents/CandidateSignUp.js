import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/index';

class CandidateSignUp extends React.Component {

  render() {
    return(
      <div className='candidate-signup'>
        <form>
          <label>
            Email:
            <input type="text" onChange={(e) => this.props.emailOnChange(e)} value={this.props.email}/>
          </label>
          <label>
            Password:
            <input type="password" onChange={(e) => this.props.passwordOnChange(e)} value={this.props.password}/>
          </label>
          <button type="button" className="btn btn-primary" onClick={() => this.props.signUp(this.props.email, this.props.password)}>Sign up</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.candidate.email,
    password: state.candidate.password,
  }
}

export default connect(mapStateToProps, actions)(CandidateSignUp);
