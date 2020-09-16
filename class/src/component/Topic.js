import React, { Component } from "react";
import { Link } from "react-router-dom";

class Topic extends Component {
  render() {
    const { address, name } = this.props;
    return (
      <div className="topic">
        <div className="topic__left">
          <h4>{name}</h4>

          <Link to={address}>
            <div className="left__content">
              <div className="release__date">
                <span className="deadline">Release Date</span>
                <br></br>
                <span>15 Mar 2020</span>
              </div>
              <div className="dead">
                <span className="deadline">Deadline</span>
                <br></br>
                <span>20 Mar 2020</span>
              </div>
              <div className="wetage">
                <span className="deadline">Watage</span>
                <br></br>
                <span>0</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="topic__right">
          <div className="circule">
            <img src="https://ninjasfiles.s3.amazonaws.com/0000000000001355.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default Topic;
