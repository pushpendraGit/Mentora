import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { authenticateUser, loginUser } from "../action/userAction";

import "./adminLogin.css";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      onClick: false,
    };
  }

  handleEmailChange = (e) => {
    this.setState({
      ...this.state,
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      ...this.state,
      password: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    this.setState({
      ...this.state,
      click: true,
    });

    this.props.dispatch(loginUser(email, password));
  };

  render() {
    const { loginSuccess, loginStart } = this.props.userAuth;
    const { click } = this.state;

    if (!loginSuccess && click) {
      toast("Email Or Password is wrong");
    }

    if (loginSuccess) {
      this.props.history.push("/");
    }

    return (
      <div>
        <ToastContainer />
        <img
          className="waven"
          src="https://github.com/sefyudem/Responsive-Login-Form/blob/master/img/wave.png?raw=true"
        />
        <div className="containern">
          <div className="img">
            <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/bg.svg" />
          </div>
          <div className="login-content">
            <form action="/users/create-session" method="POST">
              <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg" />
              <h2 className="title">Welcome</h2>

              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <h5>E-Mail</h5>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={this.handleEmailChange}
                  />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  <h5>Password</h5>
                  <input
                    type="password"
                    name="password"
                    required
                    onChange={this.handlePasswordChange}
                  />
                </div>
              </div>
              <a href="#" className="an">
                Forgot Password?
              </a>

              <input
                type="submit"
                className="btns"
                value="Login"
                onClick={this.handleFormSubmit}
              />
              <Link to="/user/resister">
                Don’t have an account? Sign up here
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userAuth }) => ({
  userAuth,
});

export default connect(mapStateToProps)(UserLogin);
