import {
  SIGNUP__START,
  SIGNUP__SUCCESS,
  LOGIN__START,
  LOGIN__SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
} from "../action/actionType";

const initialAuthState = {
  signupStart: false,
  signupSuccess: false,

  loginStart: false,
  loginSuccess: false,

  user: {},
};

export default function userAuth(state = initialAuthState, action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        loginSuccess: true,
        user: action.user,
      };
    case SIGNUP__START:
      return {
        ...state,
        signupStart: true,
      };
    case SIGNUP__SUCCESS:
      return {
        ...state,
        signupStart: false,
        signupSuccess: true,
      };

    case LOGIN__START:
      return {
        ...state,
        loginStart: true,
      };

    case LOGIN__SUCCESS:
      return {
        ...state,
        loginSuccess: true,
        user: action.user,
      };

    case SIGNUP__START:
      return {
        ...state,
        signupStart: true,
      };
    case SIGNUP__SUCCESS:
      return {
        ...state,
        signupStart: false,
        signupSuccess: true,
      };
    case LOG_OUT:
      return {
        ...state,
        user: {},
        loginSuccess: false,
      };

    default:
      return state;
  }
}
