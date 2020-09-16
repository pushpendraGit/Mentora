import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assests/img/icons/Logo.png";
import { authenticateUser, logout } from "../action/userAction";

class Nav extends Component {
  handleLogout = () => {
    this.props.dispatch(logout());
  };

  render() {
    const { loginSuccess, user } = this.props.userAuth;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="e-school" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a href="#" className="nav-link">
                    Books
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#courses" className="nav-link">
                    Courses
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Others
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Blog
                  </a>
                </li>
                {loginSuccess ? (
                  <li className="nav-item">
                    <Link
                      className="ml-3 nav-link green"
                      onClick={this.handleLogout}
                    >
                      logout
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link className="ml-3 nav-link green" to="/user/login">
                      Signin
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ userAuth }) => ({
  userAuth,
});

export default connect(mapStateToProps)(Nav);
