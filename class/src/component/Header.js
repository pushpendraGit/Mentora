import React, { Component } from "react";
import headerimg from "../assests/img/header-img.png";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="hero">
          <div className="container"></div>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6 header-text">
                <p className="text-tomato">Are you ready to Learn?</p>
                <h1 className="h1">
                  Learn With fun
                  <br></br> on <span className="text-green">any schedule</span>
                </h1>
                <p  style={{lineHeight: "36px"}} className="text-gray mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Varius blandit facilisis quam netus.
                </p>
                <a href="#" className="btn btn-green">
                  Learn More
                </a>
              </div>
              <div className="col-md-6 mt-5 mt-md-0">
                <img src={headerimg} alt="hero-image" className="img-fluid" />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
