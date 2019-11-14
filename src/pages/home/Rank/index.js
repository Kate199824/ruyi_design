import React, { Component } from "react";
import { Carousel } from "antd";
import {
  home_rank_horse,
  home_rank_title1,
  home_rank_title2,
  rank_picture_list
} from "../../../service/jsData/home";

import "./style.scss";

export default class Rank extends Component {
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
      <div className="home-rank">
        <div className="left">
          <div className="title">
            <img src={home_rank_title1} />
          </div>
          <div className="horse">
            <img src={home_rank_horse} />
          </div>
        </div>
        <div className="right">
          <div className="title">
            <img src={home_rank_title2} />
          </div>
          <div className="content">
            <Carousel
              ref={ref => (this.myRef = ref)}
              autoplay
              autoplaySpeed={5000}
            >
              {rank_picture_list.map((list, index) => {
                return (
                  <div className="one-page">
                    <div id={index} className="one-page-content">
                      {list.map((picture, index) => {
                        return (
                          <div className="one-pic">
                            <img src={picture} id={index} />
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
        </div>
      </div>
    );
  }
}
