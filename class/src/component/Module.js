import React, { Component } from "react";
import Progress from "react-progressbar";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { authenticateUser } from "../action/userAction";
import "./module.css";
import Topic from "./Topic";

class Module extends Component {
  render() {
    return (
      <div className="module">
        <div className="module__upper">
          <div className="performanceCard">
            <h3>Your Performance Status:</h3>
            <p>
              Your Current Score (%) :{" "}
              <strong style={{ color: "green" }}>96.89</strong>
            </p>
            <div className="preogress__bar">
              <Progress completed={75} />
            </div>
            <div className="progress__content">
              <p className="content">
                You would have scored <strong>97.76% </strong> if all the
                submissions were within deadlines
              </p>
              <div className="share">
                <span>Share Your Certificate in</span>
                <div className="sosal__media">
                  <div className="fb">
                    <img src="https://freepngimg.com/thumb/facebook/65302-logo-black-computer-facebook-icons-free-hq-image.png" />
                  </div>
                  <div className="linkedin">
                    <img src="https://freepngimg.com/thumb/linkedin/11-2-linkedin-png.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mudule upper ends here */}

        {/* start */}

        <div className="module__down">
          <di className="heder">
            <h2>Content</h2>
          </di>

          <div className="topis">
            <div className="f-r">
              <Topic name="Basic" address="/user/classroom" />

              <Topic name="Lecture 1" address="/user/classroom" />
            </div>

            <div className="f-r">
              <Topic name="Lecture 2" address="/user/classroom" />

              <Topic name="Lecture 3" address="/user/classroom" />
            </div>

            <div className="f-r">
              <Topic name="Lecture 4" address="/user/classroom" />

              <Topic name="Extra"  />
            </div>

            <div className="f-r">
              <Topic name="Lecture 5" address="/user/classroom" />

              <Topic name="Lecture 6" address="/user/classroom" />
            </div>

            <div className="f-r">
              <Topic name="Lecture 7" address="/user/classroom" />

              <Topic name="Lecture 8" address="/user/classroom" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userAuth }) => ({
  userAuth,
});

export default connect(mapStateToProps)(Module);
