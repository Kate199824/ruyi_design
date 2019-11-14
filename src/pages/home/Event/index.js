import React, { Component } from "react";
import { Carousel } from "antd";

import { event_picture_list } from "../../../service/jsData/home";

import "./style.scss";

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  onNext = () => {
    this.myRef.next();
  };

  onPrev = () => {
    this.myRef.prev();
  };
  render() {
    return (
      <div className="home-event">
        <Carousel ref={ref => (this.myRef = ref)} autoplay autoplaySpeed={5000}>
          {event_picture_list.map((list, index) => {
            return (
              <div className="one-page" id={index}>
                <div className="one-page-content">
                  {list.map((pic, index) => {
                    return (
                      <div className="one-pic" id={index}>
                        <img src={pic} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Carousel>
        <div className="prev" onClick={this.onPrev} />
        <div className="next" onClick={this.onNext} />
      </div>
    );
  }
}
