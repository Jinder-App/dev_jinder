const initStates = {
  registered: true,
  email: '',
  password: '',
  candidate: {},
  signnedIn: false,
};

export default (state = initStates, action) => {
  switch (action.type) {
    case 'GO_TO_SIGN_UP':
      return {
        ...state,
        registered: false,
      };
    case 'SIGN_UP':
      return {
        ...state,
        candidate: action.candidate,
        signnedIn: true,
        registered: true,
        email: '',
        password: '',
      };
    case 'SIGN_IN':
      return {
        ...state,
        candidate: action.candidate,
        signnedIn: true,
        email: '',
        password: '',
      };
    case 'EMAIL_ON_CHANGE':
      return {
        ...state,
        email: action.email,
      };
    case 'PASSWORD_ON_CHANGE':
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
};
