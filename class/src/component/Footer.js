import React, { Component } from "react";
import logo from "../assests/img/icons//Logo.png";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer style={{ backgroundColor: "#282531" }} className="text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src={logo} alt="" />
                <p>
                  Millions of people of all ages and from around the world are
                  improving their lives with us
                </p>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-2 text-center text-md-left">
                <h5 className="mt-2">Course</h5>
                <ul>
                  <li>Graphic Design</li>
                  <li>Business</li>
                  <li>Web Design</li>
                  <li>Marketing</li>
                  <li>Engineering</li>
                </ul>
              </div>
              <div className="col-md-2 text-center text-md-left">
                <h5 className="mt-2">Terms</h5>
                <ul>
                  <li>Graphic Design</li>
                  <li>Business</li>
                  <li>Web Design</li>
                  <li>Marketing</li>
                  <li>Engineering</li>
                </ul>
              </div>
              <div className="col-md-2 text-center text-md-left">
                <h5 className="mt-2">Links</h5>
                <ul>
                  <li>Graphic Design</li>
                  <li>Business</li>
                  <li>Web Design</li>
                  <li>Marketing</li>
                  <li>Engineering</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <div
          style={{ backgroundColor: "#282531", borderTop: "1px solid gray" }}
          className="text-white text-center py-4 footer-bottom"
        >
          <p> Copyright © 2020 pushpendra7060@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default Footer;
