import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import { authenticateUser } from "./action/userAction";
import "./App.css";

import Home from "./component/Home";
import MainClass from "./component/MainClass";
import Module from "./component/Module";
import Nav from "./component/Nav";
import UserLogin from "./component/UserLogin";
import UserSignUp from "./component/UserSignUp";
import JwtDecode from "jwt-decode";

const PrivateRoute = (privateRouteProps) => {
  const { loginSuccess, path, component: Component } = privateRouteProps;

  return (
    <Route
      path={path}
      render={(props) => {
        console.log("props", props);
        console.log("isLoggedin****************************", loginSuccess);
        return loginSuccess ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/user/login",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLog: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token) {
      let user = JwtDecode(token);

      this.props.dispatch(authenticateUser(user));
    }
  }

  render() {
    const { loginSuccess } = this.props.userAuth;

    const { isLog } = this.state;

    console.log("your login success at app is", this.props.userAuth);
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route path="/user/login" component={UserLogin} />
            <Route path="/user/resister" component={UserSignUp} />

            <Route path="/" exact component={Home} />

            <Route path="/user/topic" component={Module} />

            <Route path="/user/classroom" component={MainClass} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ userAuth }) => ({
  userAuth,
});

export default connect(mapStateToProps)(App);
