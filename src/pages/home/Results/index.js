import React, { Component } from "react";
import { Carousel } from "antd";
import {
  resultsTitle,
  ruyi_results,
  resultsContentList
} from "../../../service/jsData/home";

import "./style.scss";

export default class Results extends Component {
  render() {
    return (
      <div className="home-results">
        <div className="results-left">
          <div className="results-left-title">
            <img src={resultsTitle}></img>
          </div>
          <div className="split-2" />
          <div className="results-left-carousel">
            <Carousel autoplay>
              {resultsContentList.map(item => {
                return (
                  <div className="carousel-item">
                    {item.map(text => {
                      return (
                        <div className="line">
                          <div className="dot" />
                          <p>{text}</p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
        <div className="results-right">
          <img src={ruyi_results} />
        </div>
      </div>
    );
  }
}
