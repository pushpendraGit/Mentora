import React, { Component } from "react";

class ContentItem extends Component {
  render() {
      const {title} = this.props;
    return (
      <div className="content__item__container">
        <div className="content__name__container">
          <img src="https://www.flaticon.com/svg/static/icons/svg/3039/3039400.svg" />
    <div className="content__name">{title}</div>
        </div>
      </div>
    );
  }
}

export default ContentItem;
