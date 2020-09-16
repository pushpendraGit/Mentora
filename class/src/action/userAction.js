import jwt_decode from "jwt-decode";

import { user_url } from "../helper/userUrl";
import { getFormBody } from "../helper/util";
import {
  LOGIN__START,
  LOGIN__SUCCESS,
  SIGNUP__START,
  SIGNUP__SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
} from "./actionType";

export function signupStart() {
  return {
    type: SIGNUP__START,
  };
}

export function signupSuccess() {
  return {
    type: SIGNUP__SUCCESS,
  };
}

export function resisterUser(email, password, confirm_password, name) {
  return (dispatch) => {
    dispatch(signupStart());
    const url = user_url.signup();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({
        email,
        password,
        confirm_password: confirm_password,
        name,
      }),
    })
      .then((responce) => responce.json())
      .then((data) => {
        if (data.success) {
          dispatch(signupSuccess());
        }

        console.log("your responce data after submitting the form is", data);
      });
  };
}

// THERE IS ALL ACTION FOR LOGIN

export function loginStart() {
  return {
    type: LOGIN__START,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN__SUCCESS,
    user,
  };
}

export function loginUser(email, password) {
  return (dispatch) => {
    dispatch(loginStart());
    const url = user_url.login();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({
        email,
        password,
      }),
    })
      .then((responce) => responce.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("token", data.data.token);

          const user = jwt_decode(data.data.token);

          dispatch(loginSuccess(user));
        }
      });
  };
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logout() {
  localStorage.removeItem("token");

  return {
    type: LOG_OUT,
  };
}
