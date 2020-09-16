import React, { Component } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

import Progress from "react-progressbar";
import ContentItem from "./ContentItem";
import "./mainClass.css";

const opts = {
  height: "600",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

class MainClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showItem: true,

      sf: true,
      ss: false,
      st: false,
      sfo: false,
      sfiv: false,
      ssix: false,
      ssev: false,
      se: false,
    };
  }

  handletogle = () => {
    const { showItem } = this.state;

    const element = document.getElementById("fc");

    if (showItem) {
      this.setState({
        showItem: false,
      });
    } else {
      this.setState({
        showItem: true,
      });
    }
  };

  handlefirst = () => {
    console.log("your state is going to change");

    this.setState({
      ...this.state,
      sf: true,
    });
  };

  handleSecond = () => {
    this.setState({
      ...this.state,
      sf: false,
      ss: true,
      st: false,
      sfo: false,
      sfiv: false,
      ssix: false,
      ssev: false,
      se: false,
    });
  };

  handleThired = () => {
    this.setState({
      ...this.state,
      sf: false,
      ss: false,
      st: true,
      sfo: false,
      sfiv: false,
      ssix: false,
      ssev: false,
      se: false,
    });
  };

  handleFour = () => {
    this.setState({
      ...this.state,
      sf: false,
      ss: false,
      st: false,
      sfo: true,
      sfiv: false,
      ssix: false,
      ssev: false,
      se: false,
    });
  };

  handleFive = () => {
    this.setState({
      ...this.state,
      sf: false,
      ss: false,
      st: false,
      sfo: false,
      sfiv: true,
      ssix: false,
      ssev: false,
      se: false,
    });
  };

  handleSix = () => {
    this.setState({
      ...this.state,
      sf: false,
      ss: false,
      st: false,
      sfo: false,
      sfiv: false,
      ssix: true,
      ssev: false,
      se: false,
    });
  };

  handleSeven = () => {
    this.setState({
      ...this.state,
      sf: false,
      ss: false,
      st: false,
      sfo: false,
      sfiv: false,
      ssix: false,
      ssev: true,
      se: false,
    });
  };

  handleEar = () => {
    this.setState({
      ...this.state,
      sf: false,
      ss: false,
      st: false,
      sfo: false,
      sfiv: false,
      ssix: false,
      ssev: false,
      se: true,
    });
  };

  render() {
    const { showItem, sf, ss, st, sfo, sfiv, ssix, ssev, se } = this.state;
    console.log("your current stte is", this.state);

    return (
      <div className="mainClass__container">
        {showItem && (
          <div className="class__container__left">
            <div className="left__header">
              <Link to="/user/topic">
                <div className="left__header__controller">
                  <img src="https://www.flaticon.com/svg/static/icons/svg/748/748079.svg" />
                  Topic
                </div>
              </Link>
              <div className="left__header__sec">
                <img src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg" />
              </div>
            </div>

            {/* here topc card starting */}

            <div className="topic__card__main__container">
              <div className="circule">
                <img src="https://www.flaticon.com/svg/static/icons/svg/110/110191.svg" />
              </div>
              <div className="topic__info__container">
                <div className="topic__title">SMART LEADERSHIP</div>
                <div className="dead__line__container">
                  <div className="dead__line__title">Deadline</div>
                  <div className="deadline">Mar 26, 2020, 11:59 PM</div>
                </div>
              </div>
            </div>

            {/* Here topic card is ending */}

            <div className="content__list">
              <div className="c__header">
                <div className="header__type">Lecture</div>
                <div className="progressbar">
                  <Progress completed={75} />
                </div>
                <div className="score">
                  Score <span>280/280</span>
                </div>
              </div>
              {/* From here content item is going to start */}
              <div className="ite__rapper" onClick={this.handlefirst}>
                <ContentItem title="Module 1" />
              </div>

              <div className="ite__rapper" onClick={this.handleSecond}>
                <ContentItem title="Module 2" />
              </div>

              <div className="ite__rapper" onClick={this.handleThired}>
                <ContentItem title="Module 3" />
              </div>

              <div className="ite__rapper" onClick={this.handleFour}>
                <ContentItem title="Module 4" />
              </div>

              <div className="ite__rapper" onClick={this.handleFive}>
                <ContentItem title="Module 5" />
              </div>

              <div className="ite__rapper" onClick={this.handleSix}>
                <ContentItem title="Module 6" />
              </div>

              <div className="ite__rapper" onClick={this.handleSeven}>
                <ContentItem title="Module 7" />
              </div>

              <div className="ite__rapper" onClick={this.handleEar}>
                <ContentItem title="Module 8" />
              </div>

              {/* content item is going to end */}
            </div>

            {/* end */}
          </div>
        )}
        <div className="class__container__right" id="fc">
          <div className="vedio__content__header">
            <div className="header__buttons">
              <div className="toggle__btn" onClick={this.handletogle}>
                <img src="https://www.flaticon.com/premium-icon/icons/svg/2791/2791742.svg" />
              </div>
            </div>
          </div>
          <div className="vi">
            {sf && <YouTube videoId="/vVrfm6wO39s" opts={opts} />}
            {ss && <YouTube videoId="/L4N1q4RNi9I" opts={opts} />}
            {st && <YouTube videoId="/f60dheI4ARg" opts={opts} />}
            {sfo && <YouTube videoId="/vlpKyLklDDY" opts={opts} />}
            {sfiv && <YouTube videoId="/-8JCSCf_wA4" opts={opts} />}
            {ssix && <YouTube videoId="/-pLe7_5xLTs" opts={opts} />}
            {ssev && <YouTube videoId="/HKGkBRk1kSo" opts={opts} />}
            {se && <YouTube videoId="/bGBamfWasNQ" opts={opts} />}
          </div>
        </div>
      </div>
    );
  }
}

export default MainClass;
