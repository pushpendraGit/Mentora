import React, { Component } from "react";
import courceone from "../assests/img/Course 01.png";
import calender from "../assests/img/icons/calendar.png";
import courcetwo from "../assests/img/Course 02.png";
import courcethree from "../assests/img/Course 03.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Cources extends Component {
  render() {
    const { loginSuccess, user } = this.props.userAuth;
    return (
      <div>
        <section className="courses" id="courses">
          <div className="container">
            <h2 className="h2 text-violet py-5">Online Courses</h2>
            <div className="card-deck">
              <div className="card">
                <div className="card-body">
                  <img
                    src={courceone}
                    className="card-img-top mb-4"
                    alt="..."
                  />
                  <h3 className="card-title text-violet">Modern Psychology</h3>
                  <p
                    className="card-text text-gray"
                    style={{ fontWeight: "500" }}
                  >
                    Designation
                  </p>
                  <button className="btn btn-green mt-2">Buy Course</button>
                  <div className="card-f mt-5 d-flex justify-content-between">
                    <p className="text-gray d-flex align-items-center">
                      <img src={calender} alt="calendar" />
                      &nbsp;Start 20 April, 2021
                    </p>
                    <p className="text-gray d-flex align-items-center">
                      <img src={calender} alt="calendar" />
                      &nbsp;60 Seats
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <img
                    src={courcetwo}
                    className="card-img-top mb-4"
                    alt="..."
                  />
                  <h3 className="card-title text-violet">Modern Psychology</h3>
                  <p
                    className="card-text text-gray"
                    style={{ fontWeight: "500" }}
                  >
                    Designation
                  </p>
                  <button className="btn btn-green mt-2">Buy Course</button>
                  <div className="card-f mt-5 d-flex justify-content-between">
                    <p className="text-gray d-flex align-items-center">
                      <img src={calender} alt="calendar" />
                      &nbsp;Start 20 April, 2021
                    </p>
                    <p className="text-gray d-flex align-items-center">
                      <img src={calender} alt="calendar" />
                      &nbsp;60 Seats
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <img
                    src={courcethree}
                    className="card-img-top mb-4"
                    alt="..."
                  />
                  <h3 className="card-title text-violet">Smart Leadership</h3>
                  <p
                    className="card-text text-gray"
                    style={{ fontWeight: "500" }}
                  >
                    Designation
                  </p>
                  {loginSuccess ? (
                    <Link to="/user/topic" className="btn btn-green mt-2">
                      Go To Cource
                    </Link>
                  ) : (
                    <Link to="/user/login" className="btn btn-green mt-2">
                      Sign-in to View Cource
                    </Link>
                  )}

                  <div className="card-f mt-5 d-flex justify-content-between">
                    <p className="text-gray d-flex align-items-center">
                      <img src={calender} alt="calendar" />
                      &nbsp;Start 20 April, 2021
                    </p>
                    <p className="text-gray d-flex align-items-center">
                      <img src={calender} alt="calendar" />
                      &nbsp;60 Seats
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ userAuth }) => ({
  userAuth,
});

export default connect(mapStateToProps)(Cources);
