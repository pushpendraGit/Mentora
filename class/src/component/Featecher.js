import React, { Component } from "react";
import book from "../assests/img/icons/book.png";
import nub from "../assests/img/icons/1800.png";
import test from "../assests/img/icons/test.png";
import two from "../assests/img/icons/200.png";

class Featecher extends Component {
  render() {
    return (
      <div>
        <section className="features">
          <div className="container">
            <div className="row">
              <div className="col-md-3 my-3">
                <div className="feature-box">
                  <img src={book} alt="feature 1" />
                  <h3 className="h3">1500+ Topic</h3>
                  <p>Learn Anything</p>
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="feature-box">
                  <img src={nub} alt="feature 1" />
                  <h3 className="h3">1800+ Students</h3>
                  <p>Learn Anything</p>
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="feature-box">
                  <img src={test} alt="feature 1" />
                  <h3 className="h3">9K+ Test Token</h3>
                  <p>Learn Anything</p>
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="feature-box">
                  <img src={two} alt="feature 1" />
                  <h3 className="h3">2000+ Students</h3>
                  <p>Learn Anything</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Featecher;
