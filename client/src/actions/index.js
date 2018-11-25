import axios from 'axios';
const url = 'http://localhost:3001';

export const emailOnChange = (e) => dispatch => {
  dispatch ({
    type: 'EMAIL_ON_CHANGE',
    email: e.target.value,
  })
};

export const passwordOnChange = (e) => dispatch => {
  dispatch ({
    type: 'PASSWORD_ON_CHANGE',
    password: e.target.value,
  })
};

export const goToSignUp = () => dispatch => {
  dispatch ({
    type: 'GO_TO_SIGN_UP',
  })
}

export const signUp = (email, password) => async dispatch => {
  const res = await axios.post(url+'/signup', {
    email: email,
    password: password,
  })
  dispatch ({
    type: 'SIGN_UP',
    candidate: res.candidate,
  })
};

export const signIn = (email, password) => async dispatch => {
  console.log('You are inside post req!');
  console.log(email);
  console.log(password);
  const res = await axios.post(url+'/login', {
    email: email,
    password: password,
  })
  dispatch ({
    type: 'SIGN_IN',
    candidate: res.data,
  })
};
