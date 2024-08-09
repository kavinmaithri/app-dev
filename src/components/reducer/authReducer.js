import { SIGN_IN, SIGN_OUT } from '../actions/authActions';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
