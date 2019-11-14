import React, { Component } from "react";
import { Carousel } from "antd";
import { show_picture_list } from "../../../service/jsData/home";

import "./style.scss";

export default class Show extends Component {
  render() {
    return (
      <div className="home-show">
        <h2>优秀 · 作品展示</h2>
        <h3>优秀的作品使我们感到喜悦，但不会让我们止步</h3>
        <div className="content">
          <Carousel autoplay autoplaySpeed={5000}>
            {show_picture_list.map((list, index) => {
              return (
                <div className="one-page" id={index}>
                  {
                    <div className="one-row">
                      {list.slice(0, 3).map((pic, index) => {
                        return (
                          <div className="one-picture" id={index}>
                            <img src={pic} />
                          </div>
                        );
                      })}
                    </div>
                  }
                  {
                    <div className="one-row">
                      {list.slice(0, 3).map((pic, index) => {
                        return (
                          <div className="one-picture">
                            <img src={pic} />
                          </div>
                        );
                      })}
                    </div>
                  }
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
}
