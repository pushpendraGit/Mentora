import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { resisterUser } from "../action/userAction";

class UserSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({
      ...this.state,
      name: e.target.value,
    });
  };

  // for password

  handlePasswordChange = (e) => {
    this.setState({
      ...this.state,
      password: e.target.value,
    });
  };

  // for confirn password

  handleConfirmPasswordChange = (e) => {
    this.setState({
      ...this.state,
      confirm_password: e.target.value,
    });
  };

  //this is for email change

  handleEmailChange = (e) => {
    this.setState({
      ...this.state,
      email: e.target.value,
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirm_password } = this.state;

    // console.log("yourtrtf5ttfttytttttyguyyu", name, password, email);

    this.props.dispatch(resisterUser(email, password, confirm_password, name));
  };

  render() {
    const { userSignUpSuccess } = this.props.userAuth;

    if (userSignUpSuccess) {
      this.props.history.push("/user/login");
    }

    return (
      <div>
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

              {/* for name */}
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <h5>Your Name</h5>
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={this.handleNameChange}
                  />
                </div>
              </div>

              {/*  */}

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

              {/* repassword */}

              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  <h5>Repeat Password</h5>
                  <input
                    type="password"
                    name="repeat-password"
                    required
                    onChange={this.handleConfirmPasswordChange}
                  />
                </div>
              </div>

              <input
                type="submit"
                className="btns"
                value="Login"
                onClick={this.handleFormSubmit}
              />
              <a href="#" className="an">
                Already have an account ?
                <Link to="/user/login">
                  <strong>Sign in instead </strong>
                </Link>
              </a>
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

export default connect(mapStateToProps)(UserSignUp);
